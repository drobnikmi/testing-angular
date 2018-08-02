import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get<UserModel>('https://user.ceo/api/breeds/list/all');
  }
}
