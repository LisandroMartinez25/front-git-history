import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMenu } from './shared/interfaces/menu';
import { LoadingService } from './shared/services/loading.service';
import { MenuService } from './shared/services/menu.service';
import { Menu } from './shared/values/globals';

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
    private loadingService: LoadingService,
    private menuService: MenuService
  ) {
    this.title = 'Git History';
    this.loading = true;
    this.menu = [{
      option: 'Repository',
      route: Menu.REPOSITORY,
      icon: 'code',
      selected: false
    },{
      option: 'Commits',
      route: Menu.COMMITS,
      icon: 'insights',
      selected: false
    },{
      option: 'Profile',
      route: Menu.PROFILE,
      icon: 'person_outline',
      selected: false
    }]
  }

  ngOnInit(): void {
    this.loadingService.loadingSubscriber().subscribe((loading: boolean) => {
      this.loading = loading;
    });

    this.menuService.menuSubscriber().subscribe((optionMenu: string) => {
      const idx = this.menu.findIndex(option => option.route === optionMenu);

      if (idx >= 0) {
        this.menu.forEach((option, index) => { 
          option.selected = index === idx ? true : false;
        });
      } else {
        this.menu[0] .selected = true;
      }
    });
  }

  public navigate(route, index) {
    this.menu.forEach(opt => { opt.selected = false });
    this.menu[index].selected = true;
    this.router.navigate([`/${route}`]);
  }
}
