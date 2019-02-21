import { AcktenDashboardModule } from './ackten-dashboard/ackten-dashboard.module';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StatusDashboardModule } from './status-dashboard/status-dashboard.module';
import { ProfileModule } from './profile/profile.module';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    StatusDashboardModule,
    AcktenDashboardModule,
    MiscellaneousModule,
    ProfileModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
