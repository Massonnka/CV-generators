import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CircleButtonModule } from 'src/app/shared/controls/buttons/circle-button/circle-button.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { DropdownModule } from 'src/app/shared/controls/buttons/dropdown/dropdown.module';
import { ModalWindowModule } from 'src/app/shared/controls/modal/modal-window/modal-window.module';
import {
  languageFeatureKey,
  languageReducer,
} from 'src/app/store/languages/languages.reducers';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { GlobalHeaderComponent } from './components/global-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [GlobalHeaderComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    CircleButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzSelectModule,
    NzDropDownModule,
    TranslateModule,
    DropdownModule,
    NzModalModule,
    ModalWindowModule,
    NzButtonModule,
    NzBadgeModule,
    DefaultButtonModule,
    NzPopoverModule,
    NzToolTipModule,
    NzCommentModule,
    NzTabsModule,
    NzAvatarModule,
    StoreModule.forFeature(languageFeatureKey, languageReducer),
  ],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderModule {}
