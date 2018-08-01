import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogService } from './dogs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DogsListComponent],
  providers: [DogService]
})
export class DogsModule { }
