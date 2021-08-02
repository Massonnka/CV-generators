import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CircleButtonModule } from 'src/app/shared/controls/buttons/circle-button/circle-button.module';
import { DropdownModule } from 'src/app/shared/controls/buttons/dropdown/dropdown.module';
import { GlobalHeaderComponent } from './components/global-header.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalWindowModule } from 'src/app/shared/controls/modal/modal-window/modal-window.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserInfoModule } from 'src/app/modules/layout/pages/employee/user-info/user-info.module';

@NgModule({
  declarations: [GlobalHeaderComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    CircleButtonModule,
    NzIconModule,
    TranslateModule,
    DropdownModule,
    NzModalModule,
    ModalWindowModule,
    NzButtonModule,
    UserInfoModule,
  ],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderModule {}
