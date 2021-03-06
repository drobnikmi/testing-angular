import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  allUsers: UserModel;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe((allUsers) => {
      this.allUsers = allUsers;
    });
  }
}
