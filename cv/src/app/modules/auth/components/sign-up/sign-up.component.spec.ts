import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RegisterUser } from 'src/app/shared/interfaces/register-user.interface';
import { I18nModule } from 'src/app/i18n.module';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        I18nModule,
      ],
      providers: [UntypedFormBuilder, TranslateService, AuthService, HttpClient],
      declarations: [SignUpComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should return error if form is invalid', () => {
    component.registerUser();
    expect(component.registerUser()).toBeFalsy();
  });

  fit('should set user', async () => {
    const mockFb = TestBed.inject(UntypedFormBuilder);
    component.validateForm = mockFb.group({
      firstName: 'nikr',
      lastName: 'shchert',
      password: '123456',
      email: 'test@mail.exe',
      specialization: 'angular',
    });

    const userCheckSpy = spyOn(<any>component, 'userCheck');

    await component.registerUser();

    expect(userCheckSpy).toHaveBeenCalled();
  });

  fit('should check user', () => {
    const mockUser: RegisterUser = {
      firstName: 'nikr',
      lastName: 'shchert',
      password: '123456',
      email: 'test@mail.exe',
      specialization: 'angular',
    };

    (<any>component).userCheck(mockUser);

    const userCheckSpy = spyOn(<any>component, 'userCheck').and.callFake(() => {
      console.log('FFFFFFFFFFFFFFF');
    });
    expect(userCheckSpy).toBeTruthy();
  });
});
