"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const uuid_1 = require("uuid");
const Like_1 = require("./Like");
const Reply_1 = require("./Reply");
class Tweet {
    constructor(content, type) {
        this.idTweet = (0, uuid_1.v4)();
        this.content = content;
        this.type = type;
        this.likes = [];
        this.reply = [];
    }
    getIdTweet() {
        return this.idTweet;
    }
    addLike(userName) {
        // const user = users.some(item => item.username === userName)
        // if (!user) return
        const newLike = new Like_1.Like(userName);
        this.likes.push(newLike);
        console.log(this.likes);
        return;
    }
    getNumberOfLikes() {
        return this.likes.length;
    }
    getLikes() {
        const likes = this.getNumberOfLikes();
        if (likes === 0) {
            return '';
        }
        if (likes === 1) {
            return `@${this.likes[0].userName} curtiu`;
        }
        else {
            return `@${this.likes[likes - 1].userName} mais ${likes - 1} curtiram`;
        }
    }
    addReply(username, content) {
        const newReply = new Reply_1.Reply(username, content, this.idTweet);
        this.reply.push(newReply);
    }
}
exports.Tweet = Tweet;
