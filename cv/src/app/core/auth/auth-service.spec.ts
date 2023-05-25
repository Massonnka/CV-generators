import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { Gender } from 'src/app/shared/enums/gender.enums';
import { LanguageLevel } from 'src/app/shared/enums/language-levels.enums';
import { ProfessionalLevel } from 'src/app/shared/enums/professional-levels.enums';
import { Employee } from 'src/app/shared/interfaces/employees.interface';
import { FbAuthResponse } from '../../shared/interfaces/auth-response.interface';
import { LoginUser } from '../../shared/interfaces/login-user.interface';
import { RegisterUser } from '../../shared/interfaces/register-user.interface';
import { AuthService } from './auth.service';

describe('Auth service tests', () => {
  let mockLoginUser: LoginUser;
  let mockNewUser: RegisterUser;
  let mockUser: Employee = {
    id: '1',
    firstName: 'Petr',
    middleName: 'Ivanovich',
    lastName: 'Ivanov',
    email: 'test@gmail.com',
    birthDate: '20-06-2002',
    gender: Gender.Male,
    phoneNumber: '+375298904686',
    location: 'Belarus, Vitebsk',
    professionalLevel: ProfessionalLevel.Middle,
    englishLevel: LanguageLevel.B2,
    emergencyPhone: '+375295150919',
    hiringDate: '02-09-2021',
    rate: 1,
    managerId: '2',
    officeManagerId: '3',
    resourceManagerId: '4',
    specialization: 0,
    createdAt: new Date().toISOString(),
  };
  let mockError: HttpErrorResponse = {
    name: 'HttpErrorResponse',
    message: 'INVALID_EMAIL',
    error: new Subject<string>(),
    ok: false,
    headers: new HttpHeaders(),
    status: 1111,
    statusText: '1111',
    url: '4200',
    type: HttpEventType.ResponseHeader,
  };
  let mockToken: FbAuthResponse = {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTAyNjNiNjYwMDRiMzAwMTVmOTJlZTEiLCJpYXQiOjE2MjkxMDc2NDcsImV4cCI6MTYyOTExMTY0N30.h586kuoWXZDshwX8M9F9nZ5f6wAHhKA6zrDmpvJ6UoI',
  };

  let httpHandler: HttpHandler;

  interface mockRout extends Router {
    navigate: any;
  }

  let http: HttpClient = new HttpClient(httpHandler);
  let rout: any = {
    navigate: () => {
      '/auth/log-in';
    },
  };
  let routerSpy = {
    navigate: jasmine.createSpy('navigate'),
  };
  let authService = new AuthService(http, rout as mockRout);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: Router, useValue: routerSpy }, AuthService],
    });
  });

  it('should create service', () => {
    expect(authService).toBeTruthy();
  });

  it('should create request', () => {
    mockLoginUser = {
      email: 'shcherbich.n@mail.ru',
      password: '007',
    };

    expect(authService.signIn(mockLoginUser)).toBeTruthy();
  });

  it('should register user', () => {
    mockNewUser = {
      firstName: 'Nick',
      lastName: 'Boss',
      email: 'shcherbich.n@mail.ru',
      password: '007',
      specialization: 'angular',
    };
    expect(authService.signUp(mockNewUser)).toBeTruthy();
  });

  it('should catch error', () => {
    expect(authService.handleError(mockError)).toBeTruthy();
  });

  xit('should logout', () => {
    authService.logout();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('should set the user', () => {
    authService.setLocalStorageUserId(mockUser.id);
    expect(localStorage.getItem('user-id')).toBe('1');
  });

  it("should return false if the user isn'n authenticated", () => {
    expect(authService.isAuthenticated()).toBeFalsy();
  });

  it('should set the token and clear th storage if the token is null', () => {
    (<any>authService).setToken(mockToken);

    expect(localStorage.getItem('fb-token')).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTAyNjNiNjYwMDRiMzAwMTVmOTJlZTEiLCJpYXQiOjE2MjkxMDc2NDcsImV4cCI6MTYyOTExMTY0N30.h586kuoWXZDshwX8M9F9nZ5f6wAHhKA6zrDmpvJ6UoI'
    );
    expect(localStorage.getItem('fb-token-exp')).toBeTruthy();

    (<any>authService).setToken(null);

    expect(localStorage.length).toBe(0);
  });
});
