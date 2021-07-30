import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { AutocompleteModule } from 'src/app/shared/controls/inputs/autocomplete/autocomplete.module';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PrimaryButtonModule,
    SignUpRoutingModule,
    TranslateModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzSelectModule,
    NzCheckboxModule,
    InputModule,
    AutocompleteModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
