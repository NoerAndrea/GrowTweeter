import { v4 as uuid } from "uuid"

export class Like {
    private id: string
    public userName: string

    constructor(userName: string) {
        this.id = uuid();
        this.userName = userName
    }

    public getIdLike(): string {
        return this.id
    }

}