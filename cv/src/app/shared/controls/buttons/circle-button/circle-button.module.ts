import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleButtonComponent } from './components/circle-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    CircleButtonComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzButtonModule
  ],
  exports: [
    CircleButtonComponent
  ],
})
export class CircleButtonModule { }
