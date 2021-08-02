import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './components/autocomplete.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzAutocompleteModule,
    NzFormModule,
    TranslateModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
