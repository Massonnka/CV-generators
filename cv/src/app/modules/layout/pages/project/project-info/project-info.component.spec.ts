import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';
import { ProjectInfoComponent } from './project-info.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';

describe('ProjectInfoComponent', () => {
  let component: ProjectInfoComponent;
  let fixture: ComponentFixture<ProjectInfoComponent>;

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
        I18nModule,
        BreadcrumbModule
      ],
      providers: [
        TranslateService,
        provideMockStore({ initialState })
      ],
      declarations: [ProjectInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
