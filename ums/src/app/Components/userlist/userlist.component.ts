import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(public router:Router,public userService:UserService) { }
  
deleteUser(i:any){
  this.userService.user.splice(i);
}
  ngOnInit(): void {
    
  }
 

}
