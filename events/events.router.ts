import {ModelRouter} from '../common/model-router'
import * as restify from 'restify'
import {Event} from './events.model'

export class EventsRouter extends ModelRouter<Event>{
  constructor(){
      super(null)
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

export const eventsRouter:EventsRouter = new EventsRouter()
