import {Component} from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html'
})
export class UserModalComponent {

  user: UserModel;

  constructor() {}
}
