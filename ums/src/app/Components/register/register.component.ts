import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';





@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
title="REGISTER";

  
  constructor(public service:UserService,public router:Router) { }

  ngOnInit(): void {
  }
public showDetails():void{

  console.log(this.service.user)
}


}
