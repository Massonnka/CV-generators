import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs/internal/observable/of';
import { AuthService } from 'src/app/core/auth/auth.service';
import { I18nModule } from 'src/app/i18n.module';
import { LogInComponent } from './log-in.component';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        I18nModule,
        HttpClientModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        FormBuilder,
        TranslateService,
        AuthService,
        {
          provide: HttpClient,
          useValue: {
            post: () => of({}),
            get: () => of({}),
            put: () => of({}),
          },
        },
      ],
      declarations: [LogInComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set message if the route parrams are exist', () => {
    const mockActivatedRoute = TestBed.inject(ActivatedRoute);

    mockActivatedRoute.queryParams.subscribe((params) => {
      params.authFailed = 'lol';
    });

    component.ngOnInit();

    expect(component.message).toBe('Session ended. Enter data again.');

    mockActivatedRoute.queryParams.subscribe((params) => {
      params.loginAgain = 'kek';
    });

    component.ngOnInit();

    expect(component.message).toBe('Please, enter data');
  });

  it("should't login user if the form is invalid", () => {
    component.loginUser();
    expect(component.loginUser()).toBeFalsy();
  });

  it("should't login user if the form is invalid", () => {
    const mockFb = TestBed.inject(FormBuilder);
    component.validateForm = mockFb.group({
      email: ['nikita@mail.ru', [Validators.required, Validators.minLength(3)]],
      password: ['12345', [Validators.required]],
    });

    component.user = null;

    const mockStore = TestBed.inject(Store);
    const dispatchSpy = spyOn(mockStore, 'dispatch');

    component.loginUser();

    expect(dispatchSpy).toHaveBeenCalled();
  });

  xit('should authorizate if the user is exist', () => {
    const mockFb = TestBed.inject(FormBuilder);
    component.validateForm = mockFb.group({
      email: ['nikita@mail.ru', [Validators.required]],
      password: ['12345', [Validators.required]],
    });

    component.loginUser();

    console.log(component.validateForm.value);
    expect(component.validateForm.value).toEqual({
      email: null,
      password: null,
    });
  });
});
