import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    TranslateModule,
    NzLayoutModule,
    NzBreadCrumbModule,
  ],
})
export class ProjectModule {}
