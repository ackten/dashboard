import { AcktenDashboardComponent } from './ackten-dashboard/ackten-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { StatusDashboardComponent } from './status-dashboard/status-dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [ {
    path: 'ackten-dashboard',
    component: AcktenDashboardComponent,
  }, {
    path: 'status-dashboard',
    component: StatusDashboardComponent,
  }, {
    path: '',
    redirectTo: 'ackten-dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
