export class User{
    id:string;
    full_name: string;
    email: string;
    password: string;
    constructor(id = "", full_name = "", email = "", password = ""){
        this.id = id;
        this.full_name = full_name;
        this.email = email;
        this.password = password;
    }
}