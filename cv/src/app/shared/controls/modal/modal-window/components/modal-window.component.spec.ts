import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalWindowComponent } from './modal-window.component';

describe('ModalWindowComponent', () => {
  let component: ModalWindowComponent;
  let fixture: ComponentFixture<ModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalWindowComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show modal', () => {
    component.showModal();
    expect(component.isVisible).toBeTrue();
  });

  it('should close modal if the "ok" button clicked', () => {
    component.handleOk();
    expect(component.isVisible).toBeFalse();
  });

  it('should close modal if the "close" button clicked', () => {
    component.handleCancel();
    expect(component.isVisible).toBeFalse();
  });
});
