import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGlobalComponent } from './button-global.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    ButtonGlobalComponent
  ],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [
    ButtonGlobalComponent
  ]
})
export class ButtonGlobalModule { }
