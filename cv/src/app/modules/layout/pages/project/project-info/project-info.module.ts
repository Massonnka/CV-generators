import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { FormProjectModule } from './form-project/form-project.module';
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
  exports: [ProjectInfoComponent],
})
export class ProjectInfoModule { }
