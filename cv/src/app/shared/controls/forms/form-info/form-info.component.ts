import { AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormInfoComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInfoComponent implements OnInit {

  validateForm!: FormGroup;

  @Input() errorMessages: any = {};

  public onChange = (value: any) => { }
  public onTouched = (value: any) => { }

  public ngControl: NgControl;
  public group: FormGroup;

  private currentErrors: null | ValidationErrors | undefined = null;

  constructor(private fb: FormBuilder, private injector: Injector) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.ngControl.control?.statusChanges.subscribe(status => {
      this.currentErrors = this.ngControl?.control?.errors;
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

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      specialization: [null, [Validators.required]],
      department: [null, [Validators.required]],
    });
    this.control = new FormControl('');
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }

}
