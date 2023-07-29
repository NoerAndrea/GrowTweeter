import { users } from "../data/users";

export class Followers {

    userName: string

    constructor(userName: string) {

        this.userName = userName
    }

    getIdUserFollowig() {
        return users.find((item) => {
            item.getid() === this.userName
            return item.getid()
        })
    }

}