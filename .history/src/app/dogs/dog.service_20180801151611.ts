import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogModel } from './dog.model';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class DogService {

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<DogModel>('https://dog.ceo/api/breeds/list/all');
  }
}
