import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/primary-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzButtonModule,

  ],
  exports: [
    PrimaryButtonComponent
  ]
})
export class PrimaryButtonModule { }
