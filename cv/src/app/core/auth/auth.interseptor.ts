import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { AuthService } from './auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isAuthenticated()) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.authService.token}`)
            });
        }
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.authService.logout();
                }
                return throwError(error);
            }));
    }
}