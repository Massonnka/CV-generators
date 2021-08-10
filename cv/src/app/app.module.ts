import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { sidebarReducer } from './store/sidebar/sidebar.reducer';
import { AuthService } from './core/auth/auth.service';
import { AuthInterceptor } from './core/auth/auth.interseptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { themesReducer } from './store/themes/themes.reducer';
import { projectsReducer } from './store/projects/projects.reducers';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    JwtModule,
    StoreModule.forRoot({
      toggle: sidebarReducer,
      theme: themesReducer,
      projects: projectsReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
