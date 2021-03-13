import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '**',
  loadChildren: () => import('./modules/repository/repository.module').then(m => m.RepositoryModule)
},{
  path: 'Commits',
  loadChildren: () => import('./modules/commits/commits.module').then(m => m.CommitsModule)
},{
  path: 'Profile',
  loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
},{
  path: 'Pull-Requests',
  loadChildren: () => import('./modules/pull-requests/pull-requests.module').then(m => m.PullRequestsModule)
},{
  path: 'Issues',
  loadChildren: () => import('./modules/issues/issues.module').then(m => m.IssuesModule)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
