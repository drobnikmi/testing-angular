import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  constructor(private dogService: DogsService) { }

  ngOnInit() {
  }

}
