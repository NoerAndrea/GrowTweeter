import { Type } from "../types/Type";
import { Tweet } from "./Tweet";

export class Reply {
    username: string
    content: string;
    type: string
    raply: Tweet[]

    constructor(username: string ,content: string, type: Type) {
        this.username = username;
        this.content = content;
        this.type = type;
        this.raply = [];
    }

}