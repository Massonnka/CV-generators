import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input() errorMessages: any = {};
  @Input() label = '';
  @Input() placeholder = '';
  @Input() nzPlaceHolder = ''; // temp
  @Input() valueProp = '';
  @Input() labelProp = '';
  @Input() selectedValue: any;
  @Input() items: any[];
  @Input() formControlName: any;

  public onChange = (value: any) => {};
  public onTouched = () => {};
  public compareFn = (o1: any, o2: any): boolean =>
    o1 && o2 ? o1[this.valueProp] === o2[this.valueProp] : o1 === o2;

  public ngControl: NgControl;
  public control: FormControl = new FormControl();

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

  public updateValue(value: any) {
    this.onChange(value);
  }

  public ngOnInit(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => {
        this.selectedValue = value;
        this.onChange(value);
        this.onTouched();
      });
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
