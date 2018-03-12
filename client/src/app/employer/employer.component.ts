import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  public curruntUserDetails: object = { carrots: {} };
  constructor(public userService: UserService, private router: Router) {
    userService.getUserSettings('employer');
    userService.userDetail.subscribe(user => {
      this.curruntUserDetails = user;
    })
  }

  ngOnInit() {

  }
  logout() {
    localStorage.clear();
    return this.router.navigate([""]);

  }

}
