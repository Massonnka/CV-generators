import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { GlobalHeaderModule } from '../global-header/global-header.module';
import { SiderModule } from '../sider/sider.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    GlobalHeaderModule,
    LayoutRoutingModule,
    NzLayoutModule,
    SiderModule,
    NzBreadCrumbModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
