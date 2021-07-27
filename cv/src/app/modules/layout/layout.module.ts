import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { GlobalHeaderModule } from './global-header/global-header.module';
import { SiderModule } from './sider/sider.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    DefaultButtonModule,
    GlobalHeaderModule,
    LayoutRoutingModule,
    NzLayoutModule,
    SiderModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    TranslateModule,
    BreadcrumbModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule { }
