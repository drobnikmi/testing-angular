import { Injectable } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserModalComponent } from './user-modal.component';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UserServiceModalService {

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open(user: UserModel ) {
    const modal = this.modalService.open(UserModalComponent);
    modal.componentInstance.user = user;
   }

}
