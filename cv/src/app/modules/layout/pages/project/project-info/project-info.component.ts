import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
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
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInfoComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public projects: Project[] = [];
  public currentProject: any;
  private projectId: string;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private location: Location,
    private store: Store<{
      breadcrumbs: Breadcrumb[];
    }>,
    private cdRef: ChangeDetectorRef,
    private activatedRouter: ActivatedRoute
  ) {}

  public onBack(): void {
    this.location.back();
  }

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public ngOnInit(): void {
    this.projects$ = this.projectService.FoundAllProjects();
    this.projects$.subscribe((value) => {
      this.projects = value;
      // this.cdRef.markForCheck();
    });

    this.currentProject = this.getProjectInfo();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
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
            name: 'Info',
            isDisabled: true,
          },
        ],
      })
    );
  }

  public getProjectInfo() {
    const acrivatedRouterSubscriber = this.activatedRouter.params.subscribe(
      (value) => {
        this.projectId = value.project;
        this.cdRef.markForCheck();
      }
    );

    const project = this.projects.find(
      (currentValue) => currentValue._id === this.projectId
    );

    console.log(project);

    acrivatedRouterSubscriber.unsubscribe();
    return project;
  }

  public deleteItem(project: Project) {
    if (!confirm(`Are you sure you want to delete ${project.name} ?`)) {
      return;
    }
    this.projectService.DeleteProject(project._id).subscribe(() => {
      this.projects$ = this.projectService.FoundAllProjects();
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
}
