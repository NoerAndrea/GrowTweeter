import { users } from "../data/users";

export class Followers {
    userName: string

    constructor(userName: string) {
        this.userName = userName
    }

    getIdUserFollowig() {
        users.forEach((item) => {
            item.getid() === this.userName
            
            if(this.userName){
                return item.getid()
            }
        });
       
        
    }

    // getTweet(){
    //     const t = this.getIdUserFollowig()
    //     console.log(t)
    // }

}