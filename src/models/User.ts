import { v4 as uuid } from "uuid"
import { Tweet } from "./Tweet";
import { Followers } from "./Followers";
import { users } from "../data/users";

export class User {
    getIdTweet() {
        throw new Error("Method not implemented.");
    }
    private id: string;
    public name: string;
    private email: string;
    public username: string;
    private password: number;
    public tweet: Tweet[];
    public following: Followers[];

    constructor(name: string, email: string, username: string, password: number) {
        this.id = uuid()
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.tweet = [];
        this.following = [];
    }

    public getid(): string {
        return this.id
    }

    public getDetailsUser() {
        return {
            id: this.id,
            username: this.username,
            tweet: this.tweet,
            followers: this.following
        }
    }

    public showUser() {
        return this.showTweet()
    }

    public createUsers(parameters: User): void {
        const validateUsername = users.some(item => item.username === this.username);

        if (validateUsername) {
            console.log("userName existente, crie outro!")
        } else {
            const newUsers = users.push(parameters)
            console.log(`Usuario criado com sucesso! ${newUsers}`)
        }
    }

    public createTweet(parameters: Tweet): void {
        const positionUser = users.findIndex(item => item.getid() === this.id);

        if (positionUser === -1) {
            console.log("Usuário não existe!")
        } else {
            const newTweet = users[positionUser].tweet.push(parameters);
            console.log(`Tweet criado com sucesso!`)
        }
    }

    public showTweet() {

        this.tweet.forEach(item => {
            console.log(`@${this.username}: ${item.content} `)
            console.log(`${item.getLikes()}`)
            console.log(item.printReply())
            console.log("_____________________________________________")
        })

    }

    public addfollower(parameters: Followers): void {

        if (parameters.userName === this.username) {
            console.log("Você não pode seguir a si mesmo!")
        }
        this.following.push(parameters)
    };

    public showFeed() {
        if (this.following.length === 0) {
            console.log("Você não possui seguidores!")
            return
        }

        for (let i of this.following) {
            const seach = users.filter(following => following.username === i.userName)

            const followerUsers = seach.filter(user => user.showTweet())

            console.log(followerUsers)
        }

        const printUser = this.tweet.forEach(item => {
            console.log(`@${this.username}: ${item.content} `)
            console.log(`${item.getLikes()}`)
            console.log(item.printReply())
            console.log("_____________________________________________")
        })
        console.log(printUser)
    }

}


