import { v4 as uuid } from "uuid"
import { Type } from "../types/Type"
import { User, users } from "./User";
import { Like } from "./Like"

export class Tweet {
    private id: string;
    public content: string;
    public type: Type;
    public likes: Like[];

    constructor(content: string, type: Type) {

        this.id = uuid();
        this.content = content;
        this.type = type;
        this.likes = [];
    }

    public getIdTweet(): string {
        return this.id
    }

    public addLike(parameters: Like): void {
        // Encontra o usuário que deu o like pelo ID do tweet
        const tweetLike = users.find(item => item.tweet.some(tweet => tweet.getIdTweet() === this.id));

        // Verifica se o tweet existe
        if (!tweetLike) {
            console.log("Tweet não existe!");
            return;
        }

        // Encontra o índice do usuário que deu o like para obter o nome de usuário
        const nameUserIndex = users.findIndex(item => item.tweet.some(tweet => tweet.getIdTweet() === this.id));
        const authorLike = users[nameUserIndex].username;

        const newLike = new Like(authorLike)
        this.likes.push(newLike);
    }

    public getNumberOfLikes(): number {
        return this.likes.length;
    }
}


// const showMensage = users.find(item => item.tweet);

// const filterTweet = showMensage?.tweet.filter(item=> item.getIdTweet() === this.id);

// if(!filterTweet){
//     console.log("Tweet não existe!")
// }
// return  this.addLike