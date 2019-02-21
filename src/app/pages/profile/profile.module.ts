import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  imports: [
    NbLayoutModule,
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    ProfileComponent,
  ],
})
export class ProfileModule { }
