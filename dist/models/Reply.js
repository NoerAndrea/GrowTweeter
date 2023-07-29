"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = void 0;
class Reply {
    constructor(username, content, tweetAuthor) {
        this.username = username;
        this.content = content;
        this.tweetAuthor = tweetAuthor;
    }
    getDatailReply() {
        return {
            username: this.username,
            content: this.content
        };
    }
}
exports.Reply = Reply;
