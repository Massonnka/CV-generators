import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgComponent } from './bg.component';



@NgModule({
  declarations: [
    BgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BgComponent
  ]
})
export class BgModule { }
