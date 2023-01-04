import { Injectable } from '@angular/core';
interface User{

  title:string,
  firstname:string,
  lastname:string,
  email:string,
  role:string,
  password:string,

}

export interface User2{
  firstName:string,
  lastName:string,
  email:string,
  contactNo:number|null,
  address:string,
  zipCode:number|null
  password:string|null
}

export interface LoginUser{
username:string|null,
password:string|null,
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
 public isLogin:boolean=false;
 public isRegister:boolean=false;
  public user:User[]=[];
  
  public loginUser:LoginUser={
    username:null,
    password:null
  }

public user2:User2={
  firstName:'',
  lastName:'',
  email:'',
  contactNo:null,
  address:'',
  zipCode:null,
  password:null
}
  constructor() { }
}
