"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const viewerEventSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    msgType: {
        type: String
    },
    msg: {
        type: String
    },
    events: {
        context: { type: String, default: 'Player/Viewer' },
        buffer_underflow: [Number],
        hit_pause: [Number],
        hit_play: [Number],
        seeking: [Number]
    }
});
exports.ViewerEvent = mongoose.model('ViewerEvent', viewerEventSchema);
//# sourceMappingURL=viewerevents.model.js.map