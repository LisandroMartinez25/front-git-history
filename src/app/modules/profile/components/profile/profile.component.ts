import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Menu } from 'src/app/shared/values/globals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public loading: boolean;
  public user: IUser;

  constructor(
    private lodaingService: LoadingService,
    private userService: UserService,
    private menuService: MenuService
  ) {
    this.loading = true;
    this.user = {};
  }

  ngOnInit(): void {
    if(!this.loading) this.lodaingService.changeLoading(true);

    this.lodaingService.loadingSubscriber().subscribe((loading: boolean) => {
      this.loading = loading;
    }).unsubscribe();
    this.menuService.changeOptionMenu(Menu.PROFILE);

    this.getUser();
  }
  
  private getUser(): void {
    this.userService.getUser().subscribe((user: IUser) => {
      this.user = user;
      this.lodaingService.changeLoading(false);
      this.loading = false;
    });
  }
}
