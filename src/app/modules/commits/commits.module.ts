import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitListComponent } from './components/commit-list/commit-list.component';
import { CommitsRoutingModule } from './commits-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ArrayFilterPipe } from 'src/app/shared/pipes/arrayFilter.pipe';
import { FormsModule } from '@angular/forms';
import { CommitDetailComponent } from 'src/app/shared/dialogs/commit-detail/commit-detail.component';



@NgModule({
  declarations: [
    CommitListComponent,
    ArrayFilterPipe,
    CommitDetailComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CommitsModule { }
