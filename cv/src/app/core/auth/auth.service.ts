import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginUser } from '../interfaces/login-user.interface';
import { FbAuthResponse } from '../interfaces/auth-response.interface';
import { User } from '../interfaces/user.interface';
import { endpoint } from 'src/app/shared/constants/endpoind.constants';
import { RegisterUser } from '../interfaces/register-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  public signUp(user: RegisterUser): Observable<any> {
    let api = `${endpoint}/user/register`;
    return this.http
      .post(api, user)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  public signIn(user: LoginUser) {
    return this.http.post(`${endpoint}/user/login`, user).pipe(
      tap((response: any) => this.setToken(response)),
      tap((response: any) => this.setUser(response.user)),
      catchError(this.handleError.bind(this))
    );
  }

  get token(): string | null | undefined {
    const expiresDate = new Date(String(localStorage.getItem('fb-token-exp')));
    if (new Date() > expiresDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem('fb-token');
  }

  public isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  public logout() {
    this.setToken(null);
    this.router.navigate(['auth/log-in']);
  }

  public handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  public setUser(response: User) {
    localStorage.setItem('user-firstName', response.firstName);
    localStorage.setItem('user-lastName', response.lastName);
    localStorage.setItem('user-email', response.email);
    localStorage.setItem('user-specialization', response.specialization);
    localStorage.setItem('user-date-reg', response.createdAt);
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + 60 * 60 * 1000);
      localStorage.setItem('fb-token', response.accessToken);
      localStorage.setItem('fb-token-exp', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
