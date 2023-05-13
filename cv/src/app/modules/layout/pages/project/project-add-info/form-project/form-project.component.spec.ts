import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs/internal/observable/of';
import { Project } from 'src/app/core/interfaces/project.interface';
import { ProjectService } from 'src/app/core/services/project.service';
import { I18nModule } from 'src/app/i18n.module';
import { FormProjectComponent } from './form-project.component';

describe('FormProjectComponent', () => {
  let component: FormProjectComponent;
  let fixture: ComponentFixture<FormProjectComponent>;

  let mockProject: Project = {
    id: '1eafh0843',
    name: 'Cv',
    startDate: '16.08.2021',
    endDate: '16.08.2021',
    teamSize: 3,
  };
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        I18nModule,
      ],
      providers: [
        UntypedFormBuilder,
        TranslateService,
        {
          provide: HttpClient,
          useValue: {
            post: () => of({}),
            get: () => of({}),
            put: () => of({}),
          },
        },
        ProjectService,
      ],
      declarations: [FormProjectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    expect(component.submit()).toBeUndefined();

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
  });

  it('should add project', () => {
    (<any>component).addProject(mockProject);
    expect(component.validateForm.value).toEqual({
      name: null,
      startDate: null,
      endDate: null,
      teamSize: null,
      techStack: null,
      roles: null,
      description: null,
      responsibilities: null,
    });
  });

  it('should update project', () => {
    component.project = {
      name: 'Cv',
      startDate: '16.08.2021',
      endDate: '16.08.2021',
      teamSize: 3,
    };
    (<any>component).updateProject(mockProject);
    expect(component.validateForm.value).toEqual({
      name: null,
      startDate: null,
      endDate: null,
      teamSize: null,
      techStack: null,
      roles: null,
      description: null,
      responsibilities: null,
    });
  });

  xit('should get project data', () => {
    component.project = mockProject;
    component.ngOnInit();

    fixture.detectChanges();

    expect(component.validateForm.value).toEqual({
      name: component.project.name,
      startDate: component.project.startDate,
      endDate: component.project.endDate,
      teamSize: component.project.teamSize,
      techStack: '',
      roles: '',
      description: '',
      responsibilities: '',
    });
  });
});
