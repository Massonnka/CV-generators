import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGlobalComponent } from './button-global.component';

describe('ButtonGlobalComponent', () => {
  let component: ButtonGlobalComponent;
  let fixture: ComponentFixture<ButtonGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
