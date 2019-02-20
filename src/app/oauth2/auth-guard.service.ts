import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { NbAuthService, NbAuthResult } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: NbAuthService) {
  }

  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.login();
          }
        }),
      );
  }

  canLoad(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.isAuthenticated()) { return true; }
    // Navigate to the login page with extras
    this.login();
    return false;
  }

  login() {
    this.authService.authenticate('google')
      .subscribe((authResult: NbAuthResult) => {
    });
  }
}
