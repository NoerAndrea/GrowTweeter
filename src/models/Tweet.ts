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

    public addLike(userName: string): number | undefined {
        // const user = users.some(item => item.username === userName)

        // if (!user) return

        const newLike = new Like(userName)
        this.likes.push(newLike);
        console.log(this.likes)
        return
    }

    public getNumberOfLikes(): number {
        return this.likes.length
    }


    public getLikes() {
        const likes = this.getNumberOfLikes()

        if (likes === 0) {
            return ''
        }
        if (likes === 1) {
            return `@${this.likes[0].userName} curtiu`
        } else {
            return `@${this.likes[likes - 1].userName} mais ${likes - 1} curtiram`
        }
    }

    addReply(username: string, content: string) {
        const newReply = new Reply(username, content, this.idTweet);
        this.reply.push(newReply);
    }

}
