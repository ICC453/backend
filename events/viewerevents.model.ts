import * as mongoose from 'mongoose'
import * as event from './event.model'

export interface ViewerEvent extends event.Event, mongoose.Document{
  events:{
    context:string,
    buffer_underflow:number[],
    hit_pause:number[],
    hit_play:number[],
    seeking:number[]
    }

}

const viewerEventSchema = new mongoose.Schema({
  createdAt:{
    type: Date,
    default:Date.now
  },
  msgType:{
    type:String
  },
  msg:{
    type:String
  },
  events:{
    context:{type:String,default:'Player/Viewer'},
    buffer_underflow:[Number],
    hit_pause:[Number],
    hit_play:[Number],
    seeking:[Number]
    }
})

export const ViewerEvent = mongoose.model('ViewerEvent', viewerEventSchema)
