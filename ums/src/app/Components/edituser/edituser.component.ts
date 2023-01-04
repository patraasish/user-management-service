import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AdduserComponent } from '../adduser/adduser.component';

import { UserlistComponent } from '../userlist/userlist.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
userId:any;
  constructor( public userService:UserService,public router:Router,public router2:ActivatedRoute) {

    this.userId=this.router2.snapshot.paramMap.get('id');
    console.log(this.userId);
    
   }
passwordNew:any;
  update(item:any){

  for(let i=0;i<this.userService.user.length;i++){
    if(i==this.userId){
    this.userService.user[i]=item;
    }
  }
  setTimeout(() => {
        this.router.navigate(['./userlist']);
    }, 100); 
}

  ngOnInit(): void {
  }

}
