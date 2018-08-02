import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  getAllUsers() {
    this.http.get('https://user.ceo/api/breeds/list/all');
  }
}
