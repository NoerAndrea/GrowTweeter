"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
const users_1 = require("../data/users");
class User {
    getIdTweet() {
        throw new Error("Method not implemented.");
    }
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
        const validateUsername = users_1.users.some(item => item.username === this.username);
        if (validateUsername) {
            console.log("userName existente, crie outro!");
        }
        else {
            const newUsers = users_1.users.push(parameters);
            console.log(`Usuario criado com sucesso! ${newUsers}`);
        }
    }
    createTweet(parameters) {
        const positionUser = users_1.users.findIndex(item => item.getid() === this.id);
        if (positionUser === -1) {
            console.log("Usuário não existe!");
        }
        else {
            const newTweet = users_1.users[positionUser].tweet.push(parameters);
            console.log(`Tweet criado com sucesso!`);
        }
    }
    showTweet() {
        // const showContent = users.find(item => item.getid() === this.id)
        // if (!showContent) {
        //     console.log("Usuário não existe!")
        // }
        this.tweet.forEach(item => {
            console.log(item);
            console.log(`@${this.username}: ${item.content} `);
            console.log(item.getLikes());
            console.log("_____________________________________________");
        });
    }
    addfollower(parameters) {
        if (parameters.userName === this.username) {
            console.log("Você não pode seguir a si mesmo!");
        }
        this.followers.push(parameters);
    }
    ;
}
exports.User = User;
