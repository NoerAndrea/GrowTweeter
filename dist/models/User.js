"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.users = void 0;
const uuid_1 = require("uuid");
exports.users = [];
class User {
    constructor(name, email, username, password) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.tweet = [];
        this.followers = [];
    }
    getid() {
        return this.id;
    }
    createUsers(parameters) {
        const validateUsername = exports.users.some(item => item.username === this.username);
        if (validateUsername) {
            console.log("userName existente, crie outro!");
        }
        else {
            const newUsers = exports.users.push(parameters);
            console.log(`Usuario criado com sucesso! ${newUsers}`);
        }
    }
    createTweet(parameters) {
        const positionUser = exports.users.findIndex(item => item.getid() === this.id);
        if (positionUser === -1) {
            console.log("Usuário não existe!");
        }
        else {
            const newTweet = exports.users[positionUser].tweet.push(parameters);
            console.log(`Tweet criado com sucesso!`);
        }
    }
    showTweet() {
        const showContent = exports.users.find(item => item.getid() === this.id);
        if (!showContent) {
            console.log("Usuário não existe!");
        }
        return this.tweet.map(item => {
            console.log(`
            @${this.username}: ${item.content},
            [likes ${item.getNumberOfLikes()}]
            ${item.type}
            `);
            return item;
        });
    }
    addfollower(parameters) {
        if (parameters.userName === this.username) {
            console.log("Você não pode seguir a si mesmo!");
        }
        this.followers.push(parameters);
    }
    ;
    showFeed() {
        if (this.followers.length === 0) {
            console.log("Você não possui seguidores!");
            return;
        }
        const arrayTweets = [];
        exports.users.forEach(item => {
            item.showTweet().forEach(item => arrayTweets.push(item));
        });
        const filterFollower = exports.users.filter(item => item.username === this.username);
        if (!filterFollower) {
            console.log("Você não segue esse usuário!");
            return;
        }
        console.log(filterFollower);
    }
}
exports.User = User;
