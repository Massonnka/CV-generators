import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInfoProfileComponent } from './employee-info-profile.component';
import { EmployeeInfoProfileRoutingModule } from './employee-info-profile-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormInfoModule } from '../employee-add-profile/form-info/form-info.module';
import { ListModule } from 'src/app/shared/controls/list/list.module';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { InfoProfileModule } from './info-profile/info-profile.module';



@NgModule({
  declarations: [
    EmployeeInfoProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeeInfoProfileRoutingModule,
    TranslateModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    PrimaryButtonModule,
    DefaultButtonModule,
    NzTabsModule,
    FormInfoModule,
    ListModule,
    BreadcrumbModule,
    DefaultButtonModule,
    InfoProfileModule
  ],
  exports: [
    EmployeeInfoProfileComponent
  ]
})
export class EmployeeInfoProfileModule { }
