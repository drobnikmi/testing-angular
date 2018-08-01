import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DogService {

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get<d>('https://dog.ceo/api/breeds/list/all');
  }
}
