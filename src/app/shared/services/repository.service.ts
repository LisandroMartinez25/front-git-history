import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IRepository } from 'src/app/shared/interfaces/repository';

@Injectable({providedIn: 'root'})
export class RepositoryService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.github_url}repos/${environment.github_user}/${environment.github_repo}`;
  }

  public getRepository(): Observable<IRepository> {
    return this.httpClient.get<IRepository>(`${this.url}`);
  }
}