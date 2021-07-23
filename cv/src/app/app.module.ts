import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { environment } from 'src/environments/environment';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { AUTH_API_URL, STORE_API_URL } from './app-injection-token';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACCESS_TOKEN_KEY } from './services/auth.service';
import { counterReducer } from './store/reducers/counter.reducer';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    JwtModule,
    BreadcrumbModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot({count: counterReducer}, {}),
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
    {
      provide: AUTH_API_URL,
      useValue: environment.authApi,
    },
    {
      provide: STORE_API_URL,
      useValue: environment.storeApi,
    },
    BreadcrumbService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
