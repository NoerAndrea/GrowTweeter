import { v4 as uuid } from "uuid"
import { Type } from "../types/Type"
import { User, users } from "./User";
import { Like } from "./Like"

export class Tweet {
    private idTweet: string;
    public content: string;
    public type: Type;
    public likes: Like[];

    constructor(content: string, type: Type) {

        this.idTweet = uuid();
        this.content = content;
        this.type = type;
        this.likes = [];
    }

    public getIdTweet(): string {
        return this.idTweet
    }

    public addLike(userName: string ): void {
        const user = users.find(item => item.username === userName )

        if(user){
            const newLike = new Like(userName)
            this.likes.push(newLike);
        } else {
            
        }
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