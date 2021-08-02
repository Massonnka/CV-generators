import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { GlobalHeaderModule } from './global-header/global-header.module';
import { SiderModule } from './sider/sider.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    DefaultButtonModule,
    GlobalHeaderModule,
    LayoutRoutingModule,
    NzLayoutModule,
    SiderModule,
    NzMenuModule,
    NzIconModule,
    TranslateModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
