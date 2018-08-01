import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DogsService {

  constructor(private http:HttpClient) {

   }

}
