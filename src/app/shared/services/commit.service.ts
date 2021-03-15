import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ICommit } from '../interfaces/commit';

@Injectable({providedIn: 'root'})
export class CommitService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.github_url}repos/${environment.github_user}/${environment.github_repo}`;
  }

  public getCommits(): Observable<ICommit[]> {
    return this.httpClient.get<ICommit[]>(`${this.url}/commits`);
  }

  public getCommitsByBranch(sha: string): Observable<ICommit[]> {
    const params = { sha }

    return this.httpClient.get<ICommit[]>(`${this.url}/commits`, { params });
  }

  public getLastCommit(): Observable<ICommit> {
    return this.httpClient.get<ICommit>(`${this.url}/commits`).pipe(map(e => e[0]));
  }

  public getCommit(sha: string): Observable<ICommit> {
    return this.httpClient.get<ICommit>(`${this.url}/commits/${sha}`);
  }
}