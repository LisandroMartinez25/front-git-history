import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IUser } from '../interfaces/user';

@Injectable({providedIn: 'root'})
export class UserService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.github_url}users/${environment.github_user}`;
  }

  public getUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}`);
  }
}