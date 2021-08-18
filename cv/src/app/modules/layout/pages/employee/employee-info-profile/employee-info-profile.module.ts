import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { ListModule } from 'src/app/shared/controls/list/list.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { FormCvModule } from '../employee-add-profile/form-cv/form-cv.module';
import { FormInfoModule } from '../employee-add-profile/form-info/form-info.module';
import { CvInfoModule } from './cv-info/cv-info.module';
import { EmployeeInfoProfileComponent } from './employee-info-profile.component';
import { EmployeeInfoRoutingModule } from './employee-info-routing.module';
import { InfoProfileModule } from './info-profile/info-profile.module';
import { ProfileCvModule } from './profile-cv/profile-cv.module';

@NgModule({
  declarations: [EmployeeInfoProfileComponent],
  imports: [
    CommonModule,
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
    InfoProfileModule,
    FormCvModule,
    NzCollapseModule,
    NzIconModule,
    SpinnerModule,
    CvInfoModule,
    RouterModule,
    EmployeeInfoRoutingModule,
  ],
  exports: [EmployeeInfoProfileComponent],
})
export class EmployeeInfoProfileModule { }
