import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { CircleButtonModule } from 'src/app/shared/controls/buttons/circle-button/circle-button.module';
import { StoreModule } from '@ngrx/store';
import { loginSuccess } from '../../store/auth.actions';
import { authReducer } from '../../store/auth.reducers';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    PrimaryButtonModule,
    TranslateModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    InputModule,
    CircleButtonModule,
    StoreModule.forFeature('login', authReducer),
  ],
  exports: [LogInComponent],
})
export class LogInModule {}
