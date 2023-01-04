import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  public isDisabled = true;

  constructor(public router: Router, public userService: UserService) {}
  valid(item: any) {
    this.userService.user.push(item);
    console.log(this.userService.user);

    setTimeout(() => {
      this.router.navigate(['./userlist']);
    }, 100);
  }

  ngOnInit(): void {}
}
