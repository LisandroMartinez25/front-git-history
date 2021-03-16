import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommitDetailComponent } from 'src/app/shared/dialogs/commit-detail/commit-detail.component';
import { IBranch } from 'src/app/shared/interfaces/branch';
import { ICommit } from 'src/app/shared/interfaces/commit';
import { BranchService } from 'src/app/shared/services/branch.service';
import { CommitService } from 'src/app/shared/services/commit.service';

import { LoadingService } from 'src/app/shared/services/loading.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Menu } from 'src/app/shared/values/globals';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.scss']
})
export class CommitListComponent implements OnInit {
  public loading: boolean;
  public commits: ICommit[];
  public branchSelected: IBranch;
  public branches: IBranch[];
  public filterMessage: string;

  constructor(
    private commitService: CommitService,
    private lodaingService: LoadingService,
    private branchService: BranchService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private menuService: MenuService
  ) {
    this.loading = true;
    this.branchSelected = {};
    this.branches = [];
    this.filterMessage = '';
    this.commits = [];
  }
  
  ngOnInit(): void {
    if(!this.loading) this.lodaingService.changeLoading(true);

    this.lodaingService.loadingSubscriber().subscribe((loading: boolean) => {
      this.loading = loading;  
    }).unsubscribe();
    this.menuService.changeOptionMenu(Menu.COMMITS);

    this.getBranches();
  }

  private getBranches(): void {
    this.branchService.getBranches().subscribe((branches: IBranch[]) => {
      this.branches = branches;
      this.branchSelected = this.branches.find((branch: IBranch) => branch.name === 'main')
      this.lodaingService.changeLoading(false);
      this.loading = false;
      this.getCommitsByBranch();
    })
  }

  private getCommitsByBranch(): void {
    this.commitService.getCommitsByBranch(this.branchSelected.name).subscribe((commits: ICommit[]) => {
      this.commits = commits;
    })
  }

  public changeBranch(branchName) {
    this.branchSelected = this.branches.find((branch: IBranch) => branch.name === branchName)
    this.getCommitsByBranch();
  }

  public copySSH(ssh: string): void {
    navigator.clipboard.writeText(ssh).then(() => {
      this._snackBar.open('SHH Copied', 'Done', {
        duration: 2000,
      });
    });
  }

  public openCommitDetailDialog(sha: string): void {
    this.dialog.open(CommitDetailComponent, {
      width: '60%',
      data: { sha }
    });
  }
}
