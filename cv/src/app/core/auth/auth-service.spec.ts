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
import { FbAuthResponse } from '../interfaces/auth-response.interface';
import { LoginUser } from '../interfaces/login-user.interface';
import { RegisterUser } from '../interfaces/register-user.interface';
import { User } from '../interfaces/user.interface';
import { AuthService } from './auth.service';

describe('Auth service tests', () => {
  let mockLoginUser: LoginUser;
  let mockNewUser: RegisterUser;
  let mockUser: User = {
    email: 'shcherbich.n@mail.ru',
    firstName: 'Nik',
    lastName: 'Boss',
    specialization: 'Angular',
    createdAt: '21.07.2021',
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
    authService.setUser(mockUser);
    expect(localStorage.getItem('user-firstName')).toBe('Nik');
    expect(localStorage.getItem('user-lastName')).toBe('Boss');
    expect(localStorage.getItem('user-email')).toBe('shcherbich.n@mail.ru');
    expect(localStorage.getItem('user-specialization')).toBe('Angular');
    expect(localStorage.getItem('user-date-reg')).toBe('21.07.2021');
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
