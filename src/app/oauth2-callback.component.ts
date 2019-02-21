import { Component, OnInit } from '@angular/core';
import { AuthService } from './@core/oauth2/auth.service';

@Component({
  selector: 'ngx-playground-oauth2-callback',
  styleUrls: ['./oauth2-callback.scss'],
  template: `
    <nb-layout [center]="layout.id === 'center-column'" windowMode>
      <nb-layout-header fixed>
        <ngx-header [position]="sidebar.id === 'start' ? 'normal': 'inverse'"></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar"
                   tag="menu-sidebar"
                   responsive
                   [end]="sidebar.id === 'end'">
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="main-content">
        <nb-card [nbSpinner]="true" nbSpinnerStatus="active" nbSpinnerMessage="Authenticating...">

        </nb-card>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
})
export class OAuth2CallbackComponent implements OnInit {

  layout: any = {};
  sidebar: any = {
    id: 'start',
  };
  currentTheme: string;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.handleLoginCallback();
  }
}
