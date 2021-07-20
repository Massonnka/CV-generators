import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInfoComponent } from './project-info.component';
import { ProjectInfoRoutingModule } from './project-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { FormProjectModule } from 'src/app/shared/controls/forms/form-project/form-project.module';



@NgModule({
  declarations: [
    ProjectInfoComponent
  ],
  imports: [
    CommonModule,
    ProjectInfoRoutingModule,
    TranslateModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    DefaultButtonModule,
    FormProjectModule,
    DefaultButtonModule
  ],
  exports: [
    ProjectInfoComponent
  ]
})
export class ProjectInfoModule { }
