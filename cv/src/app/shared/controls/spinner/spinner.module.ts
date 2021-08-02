import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    NzSpinModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule { }
