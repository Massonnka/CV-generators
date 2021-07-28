import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrFormComponent } from './registr-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { AutocompleteModule } from 'src/app/shared/controls/inputs/autocomplete/autocomplete.module';

@NgModule({
  declarations: [
    RegistrFormComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzButtonModule,
    NzSelectModule,
    NzCheckboxModule,
    PrimaryButtonModule,
    InputModule,
    AutocompleteModule
  ],
  exports: [
    RegistrFormComponent
  ]
})
export class RegistrFormModule { }
