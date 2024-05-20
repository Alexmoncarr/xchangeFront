import { Product } from "./product.model";

export interface Profile {
    id: number;
    username: string;
    email: string;
    birthdate: string;
    products: Product[];
  }

  export class Register{
    id:number;
    username:string;
    password:string;
    email:string;

    constructor(id:number, username:string, password:string, email:string){
        this.id=id;
        this.username=username;
        this.password=password;
        this.email=email;
    }

  }