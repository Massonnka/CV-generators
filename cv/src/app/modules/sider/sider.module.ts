import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SiderComponent } from './sider.component';

@NgModule({
  declarations: [SiderComponent],
  imports: [
    CommonModule,
    NzIconModule,
  ],
  exports: [SiderComponent],
})
export class SiderModule {}
