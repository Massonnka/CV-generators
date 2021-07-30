import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './components/modal-window.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    ModalWindowComponent,
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzButtonModule
  ],
  exports: [
    ModalWindowComponent
  ]
})
export class ModalWindowModule { }
