import { NbAuthService, NbAuthResult } from '@nebular/auth';
import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [
    { title: 'Profile', link: '/pages/profile' },
    { title: 'Log out', data: 'logout' },
  ];

  constructor(private sidebarService: NbSidebarService,
              private nbAuthService: NbAuthService,
              private nbMenuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'profile-context-menu'),
        map(({ item: { data } }) => data),
      )
      .subscribe(data => {
        if (data === 'logout' ) {
          this.nbAuthService.logout('google')
          .subscribe((authResult: NbAuthResult) => {
            window.location.reload();
          });
        }
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.nbMenuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
