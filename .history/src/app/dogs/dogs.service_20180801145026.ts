import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get('https://user.ceo/api/breeds/list/all');
  }
}
