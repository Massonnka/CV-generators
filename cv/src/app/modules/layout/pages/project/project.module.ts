import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { TableModule } from 'src/app/shared/controls/tables/table/table.module';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
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
    PrimaryButtonModule,
    TableModule,
    BreadcrumbModule,
  ],
  providers: [BreadcrumbService],
  exports: [ProjectComponent],
})
export class ProjectModule {}
