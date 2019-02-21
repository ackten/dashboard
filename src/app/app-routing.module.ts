import { AuthGuard } from './@core/oauth2/auth-guard.service';
import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { OAuth2CallbackComponent } from './oauth2-callback.component';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: 'app/pages/pages.module#PagesModule',
  },
  {
    path: 'oauth2/callback',
    component: OAuth2CallbackComponent,
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  enableTracing: environment.production,
  preloadingStrategy: PreloadAllModules,
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
