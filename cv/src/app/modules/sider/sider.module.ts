import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SiderComponent } from './sider.component';


@NgModule({
  declarations: [
    SiderComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
  ], 
  exports: [
    SiderComponent
  ]
})
export class SiderModule { }
