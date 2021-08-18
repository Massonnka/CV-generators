import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import {
  breadcrumbReducer,
  breadcrumbsFeatureKey,
} from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { TableModule } from 'src/app/shared/controls/table/table.module';
import { SearchProjectPipe } from 'src/app/shared/pipes/searchProject.pipe';
import {
  projectsFeatureKey,
  projectsReducer,
} from 'src/app/store/projects/projects.reducers';
import { ProjectAddInfoModule } from './project-add-info/project-add-info.module';
import { ProjectInfoModule } from './project-info/project-info.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectComponent, SearchProjectPipe],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule,
    TranslateModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    PrimaryButtonModule,
    TableModule,
    BreadcrumbModule,
    ProjectInfoModule,
    ProjectAddInfoModule,
    HttpClientModule,
    NgxPaginationModule,
    InputModule,
    NzIconModule,
    StoreModule.forFeature(
      breadcrumbsFeatureKey || projectsFeatureKey,
      breadcrumbReducer || projectsReducer
    ),
    SpinnerModule,
  ],
  exports: [ProjectComponent],
})
export class ProjectModule { }
