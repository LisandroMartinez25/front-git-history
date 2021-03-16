import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICommit } from '../../interfaces/commit';
import { CommitService } from '../../services/commit.service';

@Component({
  selector: 'app-commit-detail',
  templateUrl: './commit-detail.component.html',
  styleUrls: ['./commit-detail.component.scss']
})
export class CommitDetailComponent implements OnInit {
  public commit: ICommit;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { sha: string },
    private commitService: CommitService,
    private _snackBar: MatSnackBar
  ) {
    this.commit = {};
  }

  ngOnInit(): void {
    this.getCommit();
  }

  private getCommit(): void {
    this.commitService.getCommit(this.data.sha).subscribe((commit: ICommit) => {
      this.commit = commit;
    })
  }

  public copySSH(ssh: string): void {
    navigator.clipboard.writeText(ssh).then(() => {
      this._snackBar.open('SHH Copied', 'Done', {
        duration: 2000,
      });
    });
  }
}
