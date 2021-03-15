import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMenu } from './shared/interfaces/menu';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public menu: IMenu[];
  public title: string;
  public loading: boolean;

  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.title = 'Git History';
    this.loading = true;
    this.menu = [{
      option: 'Repository',
      route: 'Repository',
      icon: 'code',
      selected: true
    },{
      option: 'Commits',
      route: 'Commits',
      icon: 'insights',
      selected: false
    },{
      option: 'Profile',
      route: 'Profile',
      icon: 'person_outline',
      selected: false
    }]
  }

  ngOnInit(): void {
    this.loadingService.loadingSubscriber().subscribe((loading: boolean) => {
      this.loading = loading;
    });
  }

  public navigate(route, index) {
    this.menu.forEach(opt => { opt.selected = false });
    this.menu[index].selected = true;
    this.router.navigate([`/${route}`]);
  }
}
