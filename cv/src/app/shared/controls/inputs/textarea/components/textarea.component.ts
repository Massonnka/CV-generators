import { ChangeDetectorRef } from '@angular/core';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input() errorMessages: any = {};
  @Input() label: string = '';
  @Input() placeholder: string = '';

  public onChange = (value: any) => {};
  public onTouched = () => {};

  public ngControl: NgControl;
  public control: FormControl;

  public isRequired = false;

  public componentDestroyed$ = new Subject();

  private currentErrors: null | ValidationErrors | undefined = null;

  constructor(private injector: Injector, private cdr: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.ngControl.control?.statusChanges
      .pipe(
        startWith(this.ngControl?.control?.status),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe((status) => {
        this.isRequired = this.ngControl?.control?.validator?.({
          value: null,
        } as any)?.required;
        this.currentErrors = this.ngControl?.control?.errors;
        this.cdr.detectChanges();
      });
  }

  public ngOnInit(): void {
    this.control = new FormControl('');
    this.control.valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => {
        this.onChange(value);
      });
  }

  public onBlur(): void {
    this.onTouched();
  }

  public writeValue(obj: any): void {
    this.control?.setValue(obj);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public getErrorMessage(): string {
    const keys = Object.keys(this.currentErrors || {});
    const key = keys.length && keys[0];
    return key ? this.errorMessages[key] : '';
  }
}
