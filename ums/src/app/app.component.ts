import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'user-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service:UserService) {
   }
  title = 'ums';
}
