import * as mongoose from 'mongoose'
import {validateCPF} from "../common/validators"
import * as bcrypt from 'bcrypt'
import {environment} from '../common/environment'

export interface User extends mongoose.Document{
  name:string,
  email:string,
  password:string
}

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    minlength:3
  },
  email:{
    type:String,
    required:true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
  // cpf:{
  //   type:Number,
  //   required:true,
  //   unique:true,
  //   // validate:{
  //   //   validator:validateCPF,
  //   //   message:'Path `CPF` has invalid Value'
  //   // }
  // }
})

const hashPassword = (obj, next)=>{
  bcrypt.hash(obj.password,environment.security.saltRounds)
        .then(hash=>{
          obj.password=hash
          next()
        }).catch(next)
}

const updateMiddleware = function(next){
  if (!this.getUpdate().password){
    next()
  }else{
    hashPassword(this.getUpdate(), next)
  }
}

const saveMiddleware = function(next){
  const user:User = this
  if (!user.isModified('password')){
    next()
  }else{
    hashPassword(user, next)
  }
}

userSchema.pre('save', saveMiddleware)
userSchema.pre('findOneAndUpdate', updateMiddleware)
userSchema.pre('update', updateMiddleware)

export const User = mongoose.model('User', userSchema)
