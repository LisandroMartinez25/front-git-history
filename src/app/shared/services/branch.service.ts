import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IBranch } from '../interfaces/branch';

@Injectable({providedIn: 'root'})
export class BranchService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.github_url}repos/${environment.github_user}/${environment.github_repo}`;
  }

  public getBranches(): Observable<IBranch[]> {
    return this.httpClient.get<IBranch[]>(`${this.url}/branches`);
  }
}