import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersListComponent],
  providers: [UserService]
})
export class UsersModule { }
