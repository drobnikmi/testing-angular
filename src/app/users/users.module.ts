import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UserListComponent],
  declarations: [UserListComponent],
  providers: [UserService]
})
export class UsersModule { }
