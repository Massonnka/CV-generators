import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoProfileComponent } from './info-profile.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';



@NgModule({
  declarations: [
    InfoProfileComponent
  ],
  imports: [
    CommonModule,
    NzDescriptionsModule,
    NzButtonModule,
    DefaultButtonModule,
    PrimaryButtonModule,
    TranslateModule
  ],
  exports: [
    InfoProfileComponent
  ]
})
export class InfoProfileModule { }
