import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { FormProjectModule } from 'src/app/shared/controls/forms/form-project/form-project.module';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { ProjectInfoRoutingModule } from './project-info-routing.module';
import { ProjectInfoComponent } from './project-info.component';

@NgModule({
  declarations: [ProjectInfoComponent],
  imports: [
    CommonModule,
    ProjectInfoRoutingModule,
    TranslateModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    DefaultButtonModule,
    FormProjectModule,
    DefaultButtonModule,
    BreadcrumbModule,
  ],
  providers: [BreadcrumbService],
  exports: [ProjectInfoComponent],
})
export class ProjectInfoModule {}
