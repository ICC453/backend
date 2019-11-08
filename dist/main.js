"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const viewerevents_router_1 = require("./events/viewerevents.router");
const server = new server_1.Server();
server.bootstrap([users_router_1.usersRouter, viewerevents_router_1.viewerEventsRouter]).then(server => {
    console.log('Server is list on:', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map