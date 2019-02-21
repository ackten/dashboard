import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../../../@core/oauth2/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user = {
    name: '',
  };

  userMenu = [
    { title: 'Profile', link: '/pages/profile' },
    { title: 'Log out', data: 'logout' },
  ];

  constructor(private sidebarService: NbSidebarService,
              public authService: AuthService,
              private nbMenuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'profile-context-menu'),
        map(({ item: { data } }) => data),
      )
      .subscribe(data => {
        if (data === 'logout' ) {
          this.authService.logout();
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
