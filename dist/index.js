"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./data/users");
const Followers_1 = require("./models/Followers");
const Tweet_1 = require("./models/Tweet");
const User_1 = require("./models/User");
console.log("Listar usuários");
console.log("listar usuários");
const data = users_1.users.map((user) => {
    return user.getDetailsUser();
});
console.log("===========================================================");
console.log("Criando usuários");
const user1 = new User_1.User("Leandro Fernandes", "leandro@email.com", "leandrofn3", 123456);
const user2 = new User_1.User("Fulano fulaninho", "fulano@email.com", "fulano1", 123456);
const user3 = new User_1.User("Andrea", "andreaNoer@email.com", "andrea3", 456789);
const user4 = new User_1.User("beltrano beltraninho", "beltrano@email.com", "beltrano1", 123456);
user1.createUsers(user1);
user2.createUsers(user2);
user3.createUsers(user3);
user4.createUsers(user4);
console.log("===========================================================");
console.log("Criando Tweets");
const tweet1 = new Tweet_1.Tweet("funfou", "reply");
const tweet2 = new Tweet_1.Tweet("teste", "normal");
const tweet3 = new Tweet_1.Tweet("teste2", "normal");
const tweet4 = new Tweet_1.Tweet("jhksjhdak", "normal");
user1.createTweet(tweet1);
user3.createTweet(tweet2);
user3.createTweet(tweet3);
user2.createTweet(tweet4);
tweet3.addLike("leandrofn3");
tweet3.addReply("leandrofn3", "hahahaha");
tweet4.addLike("leandrofn3");
tweet4.addLike("andrea3");
console.log("===========================================================");
console.log("adicionando seguidor a um usuário");
const follower1 = new Followers_1.Followers("leandrofn3");
const follower3 = new Followers_1.Followers("fulano1");
user3.addfollower(follower1);
user3.addfollower(follower3);
const follower2 = new Followers_1.Followers("andrea3");
user1.addfollower(follower2);
console.log("===========================================================");
// console.log("mostra todos os tweets do usuário")
// user3.showTweet()
// console.log("===========================================================")
console.log("mostra o feed do usuário");
user3.showFeed();
// console.log("===========================================================")
// tweet3.responseTweet()
// console.log(user3)
