import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/interfaces/project.interface';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProjectComponent implements OnInit {
  public validateForm!: UntypedFormGroup;
  public submitted = false;
  public project: Project;
  public isEditMode = false;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private projectService: ProjectService
  ) {}

  public ngOnInit(): void {
    const options = history.state.options;
    this.project = options && options.project;

    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      teamSize: ['', [Validators.required, Validators.pattern]],
      techStack: ['', Validators.required],
      roles: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(8)]],
      responsibilities: ['', [Validators.required, Validators.minLength(8)]],
    });
    if (this.project) {
      this.validateForm.get('name')?.setValue(this.project.name);
      this.validateForm.get('startDate')?.setValue(this.project.startDate);
      this.validateForm.get('endDate')?.setValue(this.project.endDate);
      this.validateForm.get('teamSize')?.setValue(this.project.teamSize);
      this.isEditMode = true;
    }
  }

  private updateProject(project: Project): void {
    project.id = this.project.id;
    this.projectService.updateProject(project).subscribe(
      () => {
        this.validateForm.reset();
        this.router.navigate(['/layout/project']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
        this.isEditMode = false;
      }
    );
  }

  private addProject(project: Project): void {
    this.projectService.addProject(project).subscribe(
      () => {
        this.validateForm.reset();
        this.router.navigate(['/layout/project']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }

  public submit(): void {
    if (this.validateForm.invalid) {
      return;
    }

    this.submitted = true;

    const project: Project = {
      name: this.validateForm.value.name,
      startDate: this.validateForm.value.startDate,
      endDate: this.validateForm.value.endDate,
      teamSize: this.validateForm.value.teamSize,
    };
    if (this.isEditMode) {
      this.updateProject(project);
    } else {
      this.addProject(project);
    }
  }
}
