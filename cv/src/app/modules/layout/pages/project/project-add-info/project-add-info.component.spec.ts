import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { ProjectAddInfoComponent } from './project-add-info.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProjectInfoComponent', () => {
  let component: ProjectAddInfoComponent;
  let fixture: ComponentFixture<ProjectAddInfoComponent>;

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
        BrowserDynamicTestingModule,
        HttpClientModule,
        I18nModule,
        BreadcrumbModule
      ],
      providers: [
        TranslateService,
        provideMockStore({ initialState })
      ],
      declarations: [ProjectAddInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
