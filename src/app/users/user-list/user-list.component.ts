import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { UserServiceModalService } from './user-modal/user-service-modal.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  allUsers$: Observable<UserModel[]> = this.userService.getAll();

  constructor(private userService: UserService, private userServiceModalService: UserServiceModalService) {}

  openDialog(user) {
    this.userServiceModalService.open(user);
  }
}
