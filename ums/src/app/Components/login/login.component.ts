import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:UserService,public router:Router) {
   
   }

   login(){
    
   }

   register(){
    this.service.isLogin=true;
    this.service.isRegister=true;
   }
   public isRegistered(){
    if(this.service.user2.email==this.service.loginUser.username && this.service.user2.password==this.service.loginUser.password){
      this.service.isLogin=true;
      this.service.isRegister=false;
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
  }



}
