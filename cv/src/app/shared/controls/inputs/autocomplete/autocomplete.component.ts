import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  inputValue?: string;
  options: string[] = [];

  @Input() errorMessages: any = {};

  public onChange = (value: any) => { }
  public onTouched = (value: any) => { }

  public ngControl: NgControl;
  public control: FormControl;

  private currentErrors: null | ValidationErrors | undefined = null;

  constructor(private injector: Injector) { }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }

  ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.ngControl.control?.statusChanges.subscribe(status => {
      this.currentErrors = this.ngControl?.control?.errors;
    });
  }

  ngOnInit(): void {

    this.control = new FormControl('');
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }

  writeValue(obj: any): void {
    this.control?.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  getErrorMessage(): string {
    const keys = Object.keys(this.currentErrors || {});
    const key = keys.length && keys[0];
    return key ? this.errorMessages[key] : '';
  }

}
