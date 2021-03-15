import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitListComponent } from './components/commit-list/commit-list.component';
import { CommitsRoutingModule } from './commits-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [CommitListComponent],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    MaterialModule
  ]
})
export class CommitsModule { }
