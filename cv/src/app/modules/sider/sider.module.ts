import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { SiderComponent } from './sider.component';

@NgModule({
  declarations: [SiderComponent],
  imports: [CommonModule, NzIconModule, DefaultButtonModule],
  exports: [SiderComponent],
})
export class SiderModule {}
