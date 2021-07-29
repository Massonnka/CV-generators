import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { FormProjectModule } from './form-project/form-project.module';
import { ProjectAddInfoRoutingModule } from './project-add-info-routing.module';
import { ProjectAddInfoComponent } from './project-add-info.component';

@NgModule({
  declarations: [ProjectAddInfoComponent],
  imports: [
    CommonModule,
    ProjectAddInfoRoutingModule,
    TranslateModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    DefaultButtonModule,
    FormProjectModule,
    BreadcrumbModule,

  ],
  exports: [ProjectAddInfoComponent],
})
export class ProjectAddInfoModule { }
