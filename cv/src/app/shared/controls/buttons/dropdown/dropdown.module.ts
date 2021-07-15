import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, NzDropDownModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
