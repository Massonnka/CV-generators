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
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInfoComponent implements OnInit {
  public project$: Observable<Project>;
  public projectId: string;
  public params = {
    id: '',
  };
  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  private breadcrumbHome: string;
  private breadcrumbProjects: string;
  private currentProject: Project;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{
      breadcrumbs: Breadcrumb[];
    }>
  ) {}

  public onBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    const id = this.activatedRouter.params.subscribe(
      (value) => (this.projectId = value.project)
    );

    this.params.id = this.projectId;
    this.project$ = this.projectService.GetProjectById(
      this.projectId,
      this.params
    );

    this.project$.subscribe((value) => {
      this.currentProject = value;
      this.onBreadcrumbsChange();
    });

    this.onLangChange();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
  }

  public deleteItem(project: Project) {
    if (!confirm(`Are you sure you want to delete ${project.name} ?`)) {
      return;
    }
    this.projectService.DeleteProject(project.id).subscribe(() => {
      this.project$ = this.projectService.GetProjectById(
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

  private onLangChange() {
    this.translateService
      .stream(['pages.home', 'pages.projects'])
      .subscribe(() => {
        this.breadcrumbHome = this.translateService.instant('pages.home');
        this.breadcrumbProjects =
          this.translateService.instant('pages.project');
        this.onBreadcrumbsChange();
      });
  }

  private onBreadcrumbsChange(): void {
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: this.breadcrumbHome,
            isDisabled: true,
          },
          {
            url: '/layout/project',
            name: this.breadcrumbProjects,
            isDisabled: false,
          },
          {
            url: '/layout/project/id',
            name: this.currentProject?.name!,
            isDisabled: true,
          },
        ],
      })
    );
  }
}
