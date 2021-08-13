import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { ProjectAddInfoComponent } from './project-add-info.component';

describe('ProjectInfoComponent', () => {
  let component: ProjectAddInfoComponent;
  let fixture: ComponentFixture<ProjectAddInfoComponent>;

  let mockLocation = {
    back: jasmine.createSpy('back'),
  };

  beforeEach(async () => {
    const initialState = {
      breadcrumbs: {
        url: '',
        name: '',
        isDisabled: false,
      },
    };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        I18nModule,
        BreadcrumbModule,
      ],
      providers: [
        TranslateService,
        provideMockStore({ initialState }),
        { provide: Location, useValue: mockLocation },
      ],
      declarations: [ProjectAddInfoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go prev location', async () => {
    let methodSpy = spyOn(component, 'onBack').and.callThrough();
    const button =
      fixture.debugElement.nativeElement.querySelector('#back-button');
    button.click();
    expect(methodSpy).toHaveBeenCalled();
  });
});
