"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Followers = void 0;
const users_1 = require("../data/users");
class Followers {
    constructor(userName) {
        this.userName = userName;
    }
    getIdUserFollowig() {
        return users_1.users.findIndex((item) => {
            item.getid() === this.userName;
            return item.getid();
        });
    }
}
exports.Followers = Followers;
