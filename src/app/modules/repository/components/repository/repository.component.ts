import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { IBranch } from 'src/app/shared/interfaces/branch';
import { ICommit } from 'src/app/shared/interfaces/commit';
import { IRepository } from 'src/app/shared/interfaces/repository';
import { BranchService } from 'src/app/shared/services/branch.service';
import { CommitService } from 'src/app/shared/services/commit.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { environment } from 'src/environments/environment';
import { RepositoryService } from '../../../../shared/services/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  public repository: IRepository;
  public lastCommit: ICommit;
  public branchesLength: number;
  public branchesURL: string;
  public loading: boolean;

  constructor(
    private repositoryService: RepositoryService,
    private commistService: CommitService,
    private branchService: BranchService,
    private lodaingService: LoadingService,
    private _snackBar: MatSnackBar
  ) {
    this.repository = {};
    this.lastCommit = {};
    this.loading = true;
    this.branchesURL = `https://github.com/${environment.github_user}/${environment.github_repo}/branches`;
  }
  
  ngOnInit(): void {
    if(!this.loading) this.lodaingService.changeLoading(true);

    this.lodaingService.loadingSubscriber().subscribe((loading: boolean) => {
      this.loading = loading;
    }).unsubscribe();

    this.getRepository();
    this.getLastCommit();
    this.getBranchesLength();
  }

  private getRepository(): void {
    this.repositoryService.getRepository().subscribe((repository: IRepository) => {
      this.repository = repository;
      this.lodaingService.changeLoading(false);
      this.loading = false;
    });
  }

  private getLastCommit(): void {
    this.commistService.getLastCommit().subscribe((commit: ICommit) => {
      this.lastCommit = commit;
    });
  }

  private getBranchesLength(): void {
    this.branchService.getBranches().subscribe((branches: IBranch[]) => {
      this.branchesLength = branches.length;
    });
  }

  public copySSH(): void {
    navigator.clipboard.writeText(this.repository.ssh_url).then(() => {
      this._snackBar.open('SHH Copied', 'Done', {
        duration: 2000,
      });
    });
  }
}
