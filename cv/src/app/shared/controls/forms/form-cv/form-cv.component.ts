import { AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormCvComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCvComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  validateForm!: FormGroup;

  @Input() errorMessages: any = {};

  public onChange = (value: any) => { }
  public onTouched = (value: any) => { }

  public ngControl: NgControl;
  public control: FormControl;

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
      email: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      specialization: [null, [Validators.required]],
      department: [null, [Validators.required]],
    });
    this.control = new FormControl('');
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }

}
