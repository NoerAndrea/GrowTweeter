"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const uuid_1 = require("uuid");
class Like {
    constructor(userName) {
        this.id = (0, uuid_1.v4)();
        this.userName = userName;
    }
    getIdLike() {
        return this.id;
    }
}
exports.Like = Like;
