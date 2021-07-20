import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API_URL } from '../app-injection-token';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '../../models/token';
import { Router } from '@angular/router';

export const ACCESS_TOKEN_KEY = 'bookstore_access_token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


}
