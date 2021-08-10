import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { I18nModule } from 'src/app/i18n.module';
import { SiderComponent } from './sider.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('SiderComponent', () => {
  let component: SiderComponent;
  let fixture: ComponentFixture<SiderComponent>;

  beforeEach(async () => {
    const initialState = { loggedIn: false };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        I18nModule,
      ],
      providers: [
        TranslateService,
        provideMockStore({ initialState })
      ],
      declarations: [SiderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
