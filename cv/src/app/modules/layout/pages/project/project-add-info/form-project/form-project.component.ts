import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/interfaces/interfaces';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProjectComponent implements OnInit {

  public validateForm!: FormGroup;
  submitted = false;
  project: Project;
  isEditMode = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService) { }

  public ngOnInit(): void {
    const options = history.state.options;
    this.project = options && options.project;

    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      teamSize: ['', Validators.required],
      techStack: ['', [Validators.required, Validators.minLength(4)]],
      roles: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(4)]],
      responsibilities: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submit() {
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
      project._id = this.project._id;
      this.projectService.UpdateProject(project).subscribe(() => {
        this.validateForm.reset();
        this.router.navigate(['/layout/project']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    } else {
      this.projectService.AddProject(project).subscribe(() => {
        this.validateForm.reset();
        this.router.navigate(['/layout/project']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
