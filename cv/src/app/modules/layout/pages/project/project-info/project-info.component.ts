import { Location } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Project } from 'src/app/core/interfaces/project.interface';
import { ProjectService } from 'src/app/core/services/project.service';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInfoComponent implements OnInit {
  public projects$: Observable<Project>;
  public projectId: string;
  public params = {
    id: '',
  };
  private currentProject: Project;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private store: Store<{
      breadcrumbs: Breadcrumb[];
    }>
  ) {}

  public onBack(): void {
    this.location.back();
  }

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public ngOnInit(): void {
    const id = this.activatedRouter.params.subscribe(
      (value) => (this.projectId = value.project)
    );
    this.params.id = this.projectId;
    this.projects$ = this.projectService.GetProjectById(
      this.projectId,
      this.params
    );

    this.projects$.subscribe((value) => {
      this.currentProject = value;
      this.onBreadcrumbsChange();
    });
    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
  }

  public deleteItem(project: Project) {
    if (!confirm(`Are you sure you want to delete ${project.name} ?`)) {
      return;
    }
    this.projectService.DeleteProject(project.id).subscribe(() => {
      this.projects$ = this.projectService.GetProjectById(
        this.projectId,
        this.params
      );
    });
  }

  public editItem(project: Project) {
    this.router.navigate(['/layout/project/addinfo'], {
      state: {
        options: {
          project,
        },
      },
    });
  }
  
  private onBreadcrumbsChange(): void {
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: 'Home',
            isDisabled: true,
          },
          {
            url: '/layout/project',
            name: 'Project',
            isDisabled: false,
          },
          {
            url: '/layout/project/info',
            name: this.currentProject.name!,
            isDisabled: true,
          },
        ],
      })
    );
  }
}
