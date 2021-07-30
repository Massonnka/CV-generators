import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import {
  breadcrumbReducer,
  breadcrumbsFeatureKey,
} from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { TableModule } from 'src/app/shared/controls/table/table.module';
import { ProjectAddInfoModule } from './project-add-info/project-add-info.module';
import { ProjectInfoModule } from './project-info/project-info.module';
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
    ProjectInfoModule,
    ProjectAddInfoModule,
    StoreModule.forFeature(breadcrumbsFeatureKey, breadcrumbReducer),
  ],
  exports: [ProjectComponent],
})
export class ProjectModule {}
