import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { endpoint } from 'src/app/shared/constants/endpoind.constants';
import { USE_MOCK } from 'src/app/shared/constants/use-mock.constants';
import { Gender } from 'src/app/shared/enums/gender.enums';
import { LanguageLevel } from 'src/app/shared/enums/language-levels.enums';
import { ProfessionalLevel } from 'src/app/shared/enums/professional-levels.enums';
import { Employee } from 'src/app/shared/interfaces/employees.interface';
import { MOCK_TOKEN } from 'src/app/shared/mocks/auth/auth.mocks';
import { FbAuthResponse } from '../../shared/interfaces/auth-response.interface';
import { LoginUser } from '../../shared/interfaces/login-user.interface';
import { RegisterUser } from '../../shared/interfaces/register-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}

  public signUp(user: RegisterUser): Observable<any> {
    let api = `${endpoint}/user/register`;
    return this.http
      .post(api, user)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public signIn(user: LoginUser) {
    if (USE_MOCK) {
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
        createdAt: '02-09-2021',
      };

      this.setToken({ accessToken: MOCK_TOKEN });
      this.setLocalStorageUserId(mockUser.id);

      return of(mockUser);
    }

    return this.http.post(`${endpoint}/user/login`, user).pipe(
      tap((response: any) => this.setToken(response)),
      tap((response: any) => this.setLocalStorageUserId(response.user.id)),
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

  public setLocalStorageUserId(userId: string) {
    localStorage.setItem('user-id', userId);
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
