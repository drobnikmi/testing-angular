import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  constructor(private dogService: DogsService) { 
    
  }

  ngOnInit() {
  }
  
}
