"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const uuid_1 = require("uuid");
const User_1 = require("./User");
const Like_1 = require("./Like");
class Tweet {
    constructor(content, type) {
        this.id = (0, uuid_1.v4)();
        this.content = content;
        this.type = type;
        this.likes = [];
    }
    getIdTweet() {
        return this.id;
    }
    addLike(parameters) {
        // Encontra o usuário que deu o like pelo ID do tweet
        const tweetLike = User_1.users.find(item => item.tweet.some(tweet => tweet.getIdTweet() === this.id));
        // Verifica se o tweet existe
        if (!tweetLike) {
            console.log("Tweet não existe!");
            return;
        }
        // Encontra o índice do usuário que deu o like para obter o nome de usuário
        const nameUserIndex = User_1.users.findIndex(item => item.tweet.some(tweet => tweet.getIdTweet() === this.id));
        const authorLike = User_1.users[nameUserIndex].username;
        const newLike = new Like_1.Like(authorLike);
        this.likes.push(newLike);
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
