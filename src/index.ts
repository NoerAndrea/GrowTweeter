import { Followers } from "./models/Followers";
import { Like } from "./models/Like";
import { Tweet } from "./models/Tweet";
import { User } from "./models/User";

console.log("Criando usuários")

const user1 = new User("Leandro Fernandes", "leandro@email.com", "leandrofn3", 123456);
const user2 = new User("Fulano fulaninho", "fulano@email.com", "fulano1", 123456);
const user3 = new User("Andrea", "andreaNoer@email.com", "andrea3", 456789)
const user4 = new User("beltrano beltraninho", "beltrano@email.com", "beltrano1", 123456);

user1.createUsers(user1)
user2.createUsers(user2)
user3.createUsers(user3)
user4.createUsers(user4)

console.log("===========================================================")
console.log("Criando Tweets")
const tweet1 = new Tweet("funfou", "reply")
const tweet2 = new Tweet("teste", "normal")
const tweet3 = new Tweet("teste2", "normal")
const tweet4 = new Tweet("jhksjhdak", "normal")

user1.createTweet(tweet1)
user3.createTweet(tweet2)
user3.createTweet(tweet3)
user2.createTweet(tweet4)

console.log("===========================================================")

console.log("adicionando seguidor a um usuário")
const follower1 = new Followers("leandrofn3")
user3.addfollower(follower1)

const follower2 = new Followers("andrea3")
user1.addfollower(follower2)

console.log("===========================================================")

console.log("mostra todos os tweets do usuário")
user3.showTweet()

console.log("===========================================================")
console.log("mostra o feed do usuário")
user3.showFeed()

console.log("===========================================================")

tweet3.addLike("leandrofn3")

console.log(tweet3)

