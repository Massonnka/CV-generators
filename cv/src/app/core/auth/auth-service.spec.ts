import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { pipe, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FbAuthResponse } from '../interfaces/auth-response.interface';
import { LoginUser } from '../interfaces/login-user.interface';
import { RegisterUser } from '../interfaces/register-user.interface';
import { User } from '../interfaces/user.interface';
import { AuthService } from './auth.service';

describe('Auth service tests', () => {
  let mockLoginUser: LoginUser;
  let mockNewUser: RegisterUser;
  let mockUser: User;
  let mockError: HttpErrorResponse;
  let httpHandler: HttpHandler;

  let http: HttpClient = new HttpClient(httpHandler);
  let rout: Router;
  let router = {
    navigate: jasmine.createSpy('navigate'),
  };
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        HttpClient,
        HttpHandler,
      ],
      providers: [{ provide: Router, useValue: router }, AuthService],
    });

    authService = new AuthService(http, rout);

    mockError = {
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
    mockUser = {
      email: 'shcherbich.n@mail.ru',
      firstName: 'Nik',
      lastName: 'Boss',
      specialization: 'Angular',
      createdAt: '21.07.2021',
    };
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
    expect(authService.logout()).toBeTruthy();
  });

  it('should be undefined if no token comes', () => {
    expect(authService.setUser(mockUser)).toBeUndefined();
  });

  it("should return false if the user isn'n authenticated", () => {
    expect(authService.isAuthenticated()).toBeFalsy();
  });
});
