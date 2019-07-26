import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName="";
  constructor(private user:UserService) {
      this.userName=user.userName;
   }

  ngOnInit() {
    //this.userName=this.user.userName;
  }

}
