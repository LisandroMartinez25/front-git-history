import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { RepositoryComponent } from './components/repository/repository.component';
import { RepositoryRoutingModule } from './repository-routing.module'
import { RepositoryService } from '../../shared/services/repository.service';
import { CommitService } from 'src/app/shared/services/commit.service';



@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RepositoryRoutingModule
  ],
  providers: [
    RepositoryService,
    CommitService
  ]
})
export class RepositoryModule { }
