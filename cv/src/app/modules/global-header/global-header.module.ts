import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CircleButtonModule } from 'src/app/shared/controls/buttons/circle-button/circle-button.module';
import { GlobalHeaderComponent } from './global-header.component';

@NgModule({
  declarations: [GlobalHeaderComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    CircleButtonModule,
    NzIconModule,
    TranslateModule,
  ],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderModule {}
