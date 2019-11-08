import {ModelRouter} from '../common/model-router'
import * as restify from 'restify'
import {ViewerEvent} from './viewerevents.model'

export class ViewerEventsRouter extends ModelRouter<ViewerEvent>{
  constructor(){
      super(ViewerEvent)
  }
  applyRoutes(application:restify.Server){
    application.get('/events',this.findAll)
    application.get('/events/:id',[this.validateId,this.findById])
    application.post('/events',this.save)
    application.put('/events/:id',[this.validateId, this.replace])
    application.patch('/events/:id',[this.validateId, this.update])
    application.del('/events/:id',[this.validateId, this.delete])
  }
}

export const viewerEventsRouter:ViewerEventsRouter = new ViewerEventsRouter()
