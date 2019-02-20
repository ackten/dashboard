import { AuthGuard } from './oauth2/auth-guard.service';
import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment.prod';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: 'app/pages/pages.module#PagesModule',
  },
  {
    path: 'oauth2',
    loadChildren: './oauth2/oauth2.module#OAuth2PlaygroundModule',
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
