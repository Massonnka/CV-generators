import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ProjectService } from 'src/app/core/services/project.service';
import { ProjectInfoComponent } from './project-info.component';

const MOCK_PROJECT = {
  id: 'project-id',
  name: 'project-name',
  startDate: '01-01-2000',
  endDate: '01-01-2010',
  teamSize: 10,
};

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(): any {
    return 'test-translation';
  }
}

describe('ProjectInfoComponent', () => {
  let component: ProjectInfoComponent;
  let fixture: ComponentFixture<ProjectInfoComponent>;
  const fakeTranslateService = jasmine.createSpyObj('TranslateService', [
    'instant',
    'stream',
  ]);
  const fakeProjectService = jasmine.createSpyObj('ProjectService', [
    'GetProjectById',
  ]);

  beforeEach(async () => {
    const initialState = {
      breadcrumbs: {
        url: '',
        name: '',
        isDisabled: false,
      },
    };
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, TranslateModule],
      providers: [
        { provide: TranslateService, useValue: fakeTranslateService },
        { provide: ProjectService, useValue: fakeProjectService },
        provideMockStore({ initialState }),
      ],
      declarations: [ProjectInfoComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(
    waitForAsync(async () => {
      fakeProjectService.GetProjectById.and.returnValue(of(MOCK_PROJECT));
      fakeTranslateService.instant.and.returnValue('test-translation');
      fakeTranslateService.stream.and.returnValue(of('test-translation'));

      fixture = TestBed.createComponent(ProjectInfoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
