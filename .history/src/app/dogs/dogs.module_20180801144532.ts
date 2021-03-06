import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersListComponent],
  providers: [UsersService]
})
export class UsersModule { }
