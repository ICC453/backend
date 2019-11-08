"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const viewerevents_model_1 = require("./viewerevents.model");
class ViewerEventsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(viewerevents_model_1.ViewerEvent);
    }
    applyRoutes(application) {
        application.get('/events', this.findAll);
        application.get('/events/:id', [this.validateId, this.findById]);
        application.post('/events', this.save);
        application.put('events/:id', [this.validateId, this.replace]);
        application.patch('events/:id', [this.validateId, this.update]);
        application.del('events/:id', [this.validateId, this.delete]);
    }
}
exports.ViewerEventsRouter = ViewerEventsRouter;
exports.viewerEventsRouter = new ViewerEventsRouter();
//# sourceMappingURL=viewerevents.router.js.map