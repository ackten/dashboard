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
  NbOAuth2AuthStrategy,
  NbOAuth2ResponseType,
} from '@nebular/auth';

import { OAuth2LoginComponent } from './oauth2-login.component';
import { OAuth2CallbackComponent } from './oauth2-callback.component';
import { Oauth2RoutingModule } from './oauth2-routing.module';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: 'tBMOvxHWmiVbUlH5Ql40jT2pKxv7KYP5',
          clientSecret: '',
          authorize: {
            endpoint: 'https://ackten.auth0.com/authorize',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'openid',
            redirectUri: 'http://localhost:4200/oauth2/callback',
          },
          redirect: {
            success: '/ackten-dashboard',
          },
        }),
      ],
    }),

    NbCardModule,
    NbLayoutModule,
    Oauth2RoutingModule,
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
