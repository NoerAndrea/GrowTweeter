import { users } from "../data/users";
import { Type } from "../types/Type";
import { Tweet } from "./Tweet";

export class Reply {
    username: string
    content: string;
    tweetAuthor: string

    constructor(username: string, content: string, tweetAuthor: string) {
        this.username = username;
        this.content = content;
        this.tweetAuthor = tweetAuthor;
    }

}