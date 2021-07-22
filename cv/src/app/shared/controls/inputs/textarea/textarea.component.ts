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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input() errorMessages: any = {};

  public onChange = (value: any) => { }
  public onTouched = (value: any) => { }

  public ngControl: NgControl;
  public control: FormControl;

  componentDestroyed$ = new Subject();

  private currentErrors: null | ValidationErrors | undefined = null;

  constructor(private injector: Injector) { }

  ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.ngControl.control?.statusChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe(status => {
      this.currentErrors = this.ngControl?.control?.errors;
    });
  }

  ngOnInit(): void {

    this.control = new FormControl('');
    this.control.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe(value => {
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