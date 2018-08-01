import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { DogModel } from '../dog.model';


@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {
  private allDogs: DogModel;
  constructor(private dogService: DogService) {}

  ngOnInit() {
    
  }
}
