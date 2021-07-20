import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, NzListModule, RouterModule, TranslateModule],
  exports: [ListComponent],
})
export class ListModule {}
