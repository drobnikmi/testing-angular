import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogsService } from './dogs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DogsListComponent],
  providers: [DogsService]
})
export class DogsModule { }
