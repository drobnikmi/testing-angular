import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from '../../../node_modules/rxjs/Observable';
import { UserModel } from './models/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
