"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Followers = void 0;
const users_1 = require("../data/users");
class Followers {
    constructor(userName) {
        this.userName = userName;
    }
    getIdUserFollowig() {
        users_1.users.forEach((item) => {
            item.getid() === this.userName;
            if (this.userName) {
                return item.getid();
            }
        });
    }
}
exports.Followers = Followers;
