"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const uuid_1 = require("uuid");
const User_1 = require("./User");
const Like_1 = require("./Like");
class Tweet {
    constructor(content, type) {
        this.idTweet = (0, uuid_1.v4)();
        this.content = content;
        this.type = type;
        this.likes = [];
    }
    getIdTweet() {
        return this.idTweet;
    }
    addLike(userName) {
        const user = User_1.users.find(item => item.username === userName);
        if (user) {
            const newLike = new Like_1.Like(userName);
            this.likes.push(newLike);
        }
        else {
        }
    }
    getNumberOfLikes() {
        return this.likes.length;
    }
}
exports.Tweet = Tweet;
// const showMensage = users.find(item => item.tweet);
// const filterTweet = showMensage?.tweet.filter(item=> item.getIdTweet() === this.id);
// if(!filterTweet){
//     console.log("Tweet não existe!")
// }
// return  this.addLike
