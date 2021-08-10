import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { GlobalHeaderComponent } from './global-header.component';

describe('GlobalHeaderComponent', () => {
  let component: GlobalHeaderComponent;
  let fixture: ComponentFixture<GlobalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TranslateService
      ],
      declarations: [GlobalHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
