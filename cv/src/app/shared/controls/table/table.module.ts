import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from './components/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TranslateModule, NzTableModule],
  exports: [TableComponent],
})
export class TableModule {}
