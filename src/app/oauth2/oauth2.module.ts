/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  NbCardModule,
  NbLayoutModule,
} from '@nebular/theme';

import {
  NbAuthModule,
} from '@nebular/auth';

import { OAuth2LoginComponent } from './oauth2-login.component';
import { OAuth2CallbackComponent } from './oauth2-callback.component';
import { OAuth2RoutingModule } from './oauth2-routing.module';
import { AuthGuard } from './auth-guard.service';
import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ThemeModule.forRoot(),
    NbAuthModule,

    NbCardModule,
    NbLayoutModule,
    OAuth2RoutingModule,
  ],
  declarations: [
    OAuth2LoginComponent,
    OAuth2CallbackComponent,
  ],
  providers: [
    AuthGuard,
  ],
})
export class OAuth2PlaygroundModule {
}
