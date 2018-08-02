import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UserModel>('https://user.ceo/api/breeds/list/all');
  }
}
