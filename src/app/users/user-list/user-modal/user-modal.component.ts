import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html'
})
export class UserModalComponent implements OnInit {
  user: UserModel;
  profileForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('Marcin'),
      lastName: new FormControl('Dabrowski')
    });
  }

}
