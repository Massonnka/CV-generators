import { Injectable } from '@angular/core';
import {
  FbAuthResponse,
  LoginUser,
  RegisterUser,
  User,
} from '../interfaces/interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  endpoint: string = 'https://innowise-cv-generator.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  signUp(user: RegisterUser): Observable<any> {
    let api = `${this.endpoint}/user/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  signIn(user: LoginUser) {
    return this.http.post(`${this.endpoint}/user/login`, user).pipe(
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

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    this.router.navigate(['auth/log-in']);
  }

  handleError(error: HttpErrorResponse) {
    const { message } = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Wrong email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Nonexistent email');
        break;
    }

    return throwError(error);
  }

  public setUser(response: User) {
    localStorage.setItem('user-firstName', response.firstName);
    localStorage.setItem('user-lastName', response.lastName);
    localStorage.setItem('user-email', response.email);
    localStorage.setItem('user-specialization', response.specialization);
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
