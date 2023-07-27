import { v4 as uuid } from "uuid"
import { Type } from "../types/Type"

import { Like } from "./Like"
import { users } from "../data/users";
import { Reply } from "./Reply";

export class Tweet {
    private idTweet: string;
    public content: string;
    public type: Type;
    public reply: Reply[];
    public likes: Like[];

    constructor(content: string, type: Type) {

        this.idTweet = uuid();
        this.content = content;
        this.type = type;
        this.likes = [];
        this.reply = [];
    }

    public getIdTweet(): string {
        return this.idTweet
    }

    public addLike(userName: string): void {
        const user = users.find(item => item.username === userName)

        if (user) {
            const newLike = new Like(userName)
            this.likes.push(newLike);
        } else {

        }
    }

    public getNumberOfLikes(): number {
        if (this.likes.length === 0) {
            return 0
        }else {
            return 1
        }
    }


    public getLike() {
        const search = this.likes.forEach(item => item.userName)
        console.log(search)
        return search
    }

    addReply(){

    }

    public responseTweet(userId: string, tweetId: string, contend: string){
        const positionUser = users.findIndex(item => item.getid() === userId)

        if (positionUser === -1) {
            console.log("Usuário não existe!")
        }

        const positionTweet = users[positionUser].tweet.find(item => item.getIdTweet() === tweetId)

        // const newReply = new Reply("funfou reply","normal");
        }
}
