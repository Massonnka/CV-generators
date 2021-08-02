import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DefaultButtonComponent } from './components/default-button.component';


@NgModule({
  declarations: [
    DefaultButtonComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
  ],
  exports: [
    DefaultButtonComponent
  ]
})
export class DefaultButtonModule { }
