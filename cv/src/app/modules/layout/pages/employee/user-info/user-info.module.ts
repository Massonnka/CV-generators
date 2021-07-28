import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PrimaryButtonModule } from '../../../../../shared/controls/buttons/primary-button/primary-button.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    NzDescriptionsModule,
    NzButtonModule,
    PrimaryButtonModule,
    TranslateModule
  ],
  exports: [
    UserInfoComponent
  ]
})
export class UserInfoModule { }
