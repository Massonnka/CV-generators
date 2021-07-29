import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddInfoComponent } from './project-add-info.component';

describe('ProjectInfoComponent', () => {
  let component: ProjectAddInfoComponent;
  let fixture: ComponentFixture<ProjectAddInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
