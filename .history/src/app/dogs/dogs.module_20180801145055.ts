import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogService } from './dog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DogListComponent],
  providers: [DogService]
})
export class DogsModule { }
