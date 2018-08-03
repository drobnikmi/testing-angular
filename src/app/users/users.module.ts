import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserServiceModalService } from './user-list/user-modal/user-service-modal.service';
import { UserModalComponent } from './user-list/user-modal/user-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UserListComponent],
  declarations: [UserListComponent, UserModalComponent],
  providers: [UserService, UserServiceModalService],
  entryComponents: [UserModalComponent]
})
export class UsersModule { }
