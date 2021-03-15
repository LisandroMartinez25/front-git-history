import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'Repository',
  loadChildren: () => import('./modules/repository/repository.module').then(m => m.RepositoryModule)
},{
  path: 'Branches',
  loadChildren: () => import('./modules/branches/branches.module').then(m => m.BranchesModule)
},{
  path: 'Commits',
  loadChildren: () => import('./modules/commits/commits.module').then(m => m.CommitsModule)
},{
  path: 'Profile',
  loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
},{
  path: 'Issues',
  loadChildren: () => import('./modules/issues/issues.module').then(m => m.IssuesModule)
},{
  path: '**',
  redirectTo: 'Repository'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
