import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { ProjectInfoComponent } from './project-info.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ProjectService } from 'src/app/core/services/project.service';
import { Pipe, PipeTransform } from '@angular/core';

const MOCK_PROJECT = {
  id: 'project-id',
  name: 'project-name',
  startDate: '01-01-2000',
  endDate: '01-01-2010',
  teamSize: 10
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
  const fakeTranslateService = jasmine.createSpyObj('TranslateService', ['instant', 'get']);
  const fakeProjectService = jasmine.createSpyObj('ProjectService', ['GetProjectById']);

  beforeEach(async () => {
    const initialState = {
      breadcrumbs: {
        url: '',
        name: '',
        isDisabled: false,
      }
    };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [
        { provide: TranslateService, useValue: fakeTranslateService },
        { provide: ProjectService, useValue: fakeProjectService },
        provideMockStore({ initialState })
      ],
      declarations: [
        ProjectInfoComponent,
        MockTranslatePipe
      ]
    })
      .compileComponents();
  });

  beforeEach(waitForAsync(() => {
    fakeProjectService.GetProjectById.and.returnValue(of(MOCK_PROJECT));
    fakeTranslateService.instant.and.returnValue('test-translation');
    fakeTranslateService.get.and.returnValue(of('test-translation'));

    fixture = TestBed.createComponent(ProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
