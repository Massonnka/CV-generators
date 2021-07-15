import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalHeaderComponent } from './global-header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'

@NgModule({
  declarations: [GlobalHeaderComponent],
  imports: [CommonModule, NzPageHeaderModule],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderModule { }
