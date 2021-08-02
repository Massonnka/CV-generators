import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProjectService } from 'src/app/core/services/project.service';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { ListModule } from 'src/app/shared/controls/list/list.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { FormProjectModule } from '../../project/project-add-info/form-project/form-project.module';
import { EmployeeAddProfileComponent } from './employee-add-profile.component';
import { FormCvModule } from './form-cv/form-cv.module';
import { FormInfoModule } from './form-info/form-info.module';

@NgModule({
  declarations: [EmployeeAddProfileComponent],
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
    FormCvModule,
    NzCollapseModule,
    FormProjectModule,
    NzCollapseModule,
    SpinnerModule,
  ],
  providers: [ProjectService],
  exports: [EmployeeAddProfileComponent],
})
export class EmployeeAddProfileModule {}
