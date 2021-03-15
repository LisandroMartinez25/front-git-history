import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: BehaviorSubject<boolean>;

  constructor() {
    this.loading = new BehaviorSubject(true);
  }

  public loadingSubscriber(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public changeLoading(status: boolean): void {
    this.loading.next(status);
  }
}
