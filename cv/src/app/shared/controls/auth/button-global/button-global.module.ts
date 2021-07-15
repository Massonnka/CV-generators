import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGlobalComponent } from './button-global.component';



@NgModule({
  declarations: [
    ButtonGlobalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonGlobalComponent
  ]
})
export class ButtonGlobalModule { }
