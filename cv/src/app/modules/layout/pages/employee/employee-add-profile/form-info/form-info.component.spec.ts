import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { I18nModule } from 'src/app/i18n.module';
import { FormInfoComponent } from './form-info.component';

describe('FormInfoComponent', () => {
  let component: FormInfoComponent;
  let fixture: ComponentFixture<FormInfoComponent>;
  let httpHandler: HttpHandler;

  let http: HttpClient = new HttpClient(httpHandler);
  let employeeService: EmployeeService = new EmployeeService(http);
  beforeEach(async () => {
    window.history.pushState({ options: 'somevalue' }, '', '');
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        HttpClientModule,
        I18nModule,
      ],
      providers: [FormBuilder, TranslateService],
      declarations: [FormInfoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if can submit', () => {
    if (component.validateForm.invalid) {
      expect(component.submit()).toBeFalsy();
    }
  });
});
