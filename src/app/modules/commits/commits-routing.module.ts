import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitListComponent } from './components/commit-list/commit-list.component';

const routes: Routes = [
  { path: '', component: CommitListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitsRoutingModule { }