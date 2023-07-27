import { v4 as uuid } from "uuid"
import { Tweet } from "./Tweet";
import { Followers } from "./Followers";


export const users: User[] = [];

export class User {
    private id: string;
    public name: string;
    private email: string;
    public username: string;
    private password?: number;
    public tweet: Tweet[];
    public followers: Followers[];

    constructor(name: string, email: string, username: string, password: number) {
        this.id = uuid()
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.tweet = [];
        this.followers = [];
    }

    public getid(): string {
        return this.id
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
        const showContent = users.find(item => item.getid() === this.id)

        if (!showContent) {
            console.log("Usuário não existe!")
        }

        return this.tweet.map(item => {
            console.log(`
            @${this.username}: ${item.content},
            [likes ${item.getNumberOfLikes()}]
            ${item.type}
            `)
            return item
        })
    }

    public addfollower(parameters: Followers): void {
    
        if (parameters.userName === this.username) {
            console.log("Você não pode seguir a si mesmo!")
        } 
        this.followers.push(parameters)
    };

    public showFeed() {
        if(this.followers.length === 0){
            console.log("Você não possui seguidores!")
            return
        }

        const arrayTweets = []

        users.forEach(item => {
            item.showTweet().forEach(item => arrayTweets.push(item))
        })

        const filterFollower = users.filter(item => item.username === this.username)

        if (!filterFollower) {
            console.log("Você não segue esse usuário!")
            return
        }
        console.log(filterFollower)

    }

}


