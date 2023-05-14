import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';
import { Employee } from 'src/app/shared/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { I18nModule } from 'src/app/i18n.module';
import { FormCvComponent } from './form-cv.component';

describe('FormCvComponent', () => {
  let component: FormCvComponent;
  let fixture: ComponentFixture<FormCvComponent>;
  history.pushState('some data', 'title', null);

  let mockEmployee: Employee = {
    id: '1',
    firstName: 'nikita',
    lastName: 'Boss',
    email: 'some@mail.ru',
    department: 'JS',
    specialization: 'angular',
    cv: {
      email: 'email@mail.ru',
      lastName: 'lastName',
      skills: 'skills',
      specialization: 'specialization',
      department: 'department',
    },
  };

  let router: Router;

  let navigateSpy: any;
  beforeEach(async () => {
    window.history.pushState(
      {
        options: {
          employee: mockEmployee,
        },
      },
      '',
      ''
    );

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserDynamicTestingModule,
        I18nModule,
        HttpClientTestingModule,
      ],
      providers: [
        UntypedFormBuilder,
        TranslateService,
        EmployeeService,
        {
          provide: HttpClient,
          useValue: {
            post: (_: string, data: unknown) => {
              if (data) {
                return of({});
              } else {
                return throwError('kek');
              }
            },
            get: () => of({}),
            put: (_: string, data: unknown) => {
              if (data) {
                return of({});
              } else {
                return throwError('kek');
              }
            },
          },
        },
      ],
      declarations: [FormCvComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return undefined if form is invalid', () => {
    component.submit();
    expect(component.submit()).toBeUndefined();
  });

  it('should add employee', () => {
    (<any>component).addEmployee(mockEmployee);
    expect(component.validateForm.value).toEqual({
      department: null,
      email: null,
      lastName: null,
      skills: null,
      specialization: null,
    });
    expect(component.submitted).toBeFalse();
  });

  it('should catch error in the add employee function', () => {
    (<any>component).addEmployee(null);
    expect(component.submitted).toBeFalse();
  });

  it('should update employee', () => {
    component.employee = mockEmployee;

    (<any>component).updateEmployee(mockEmployee);
    expect(component.validateForm.value).toEqual({
      department: null,
      email: null,
      lastName: null,
      skills: null,
      specialization: null,
    });
    expect(component.submitted).toBeFalse();
    expect(navigateSpy).toHaveBeenCalledTimes(1);
  });

  xit('should catch error in the update employee function', () => {
    component.employee = null;
    (<any>component).updateEmployee(null);
    expect(component.submitted).toBeFalse();
    expect(component.isEditMode).toBeFalse();
  });

  it('should submit and check if isEditMode is true', () => {
    const mockFb = TestBed.inject(UntypedFormBuilder);
    component.validateForm = mockFb.group({
      name: ['nikita', [Validators.required, Validators.minLength(3)]],
      startDate: ['16.08.2021', Validators.required],
      endDate: ['10.09.2021', Validators.required],
      teamSize: ['2', [Validators.required, Validators.pattern]],
      techStack: ['Angular', Validators.required],
      roles: ['Front end', Validators.required],
      description: [
        'Cv project',
        [Validators.required, Validators.minLength(8)],
      ],
      responsibilities: [
        'All for all',
        [Validators.required, Validators.minLength(8)],
      ],
    });
    fixture.detectChanges();

    spyOn(<any>component, 'addEmployee');
    spyOn(<any>component, 'updateEmployee');

    component.isEditMode = false;
    component.submit();

    expect((<any>component).addEmployee).toHaveBeenCalled();

    component.isEditMode = true;
    component.submit();

    expect((<any>component).updateEmployee).toHaveBeenCalled();
  });

  it('should set validate form', () => {
    component.employee = mockEmployee;

    fixture.detectChanges();
    component.ngOnInit();

    expect(component.validateForm.value).toEqual({
      email: component.employee.cv?.email,
      lastName: component.employee.cv?.lastName,
      skills: component.employee.cv?.skills,
      specialization: component.employee.cv?.specialization,
      department: component.employee.cv?.department,
    });

    expect(component.isEditMode).toBeTrue();
  });
});
