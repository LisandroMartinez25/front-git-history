import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IMenu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private optionMenuSelected: BehaviorSubject<string>;

  constructor() {
    this.optionMenuSelected = new BehaviorSubject('');
  }

  public menuSubscriber(): Observable<string> {
    return this.optionMenuSelected.asObservable();
  }

  public changeOptionMenu(option: string): void {
    this.optionMenuSelected.next(option);
  }
}
