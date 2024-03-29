import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Observable } from 'rxjs';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router } from '@angular/router';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { TranslateService } from '@ngx-translate/core';

import * as ProjectsActions from './../../../../store/projects/projects.actions';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  @Input() public currentProject: Project;

  public projects$: Observable<Project[]>;
  public projects: Project[] = [];
  public isLoading = false;
  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[] = [];

  private breadcrumbHome: string;
  private breadcrumbProjects: string;
  public query: string = '';
  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 8;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private cdRef: ChangeDetectorRef,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  public ngOnInit(): void {
    this.isLoading = true;
    this.fetchPosts();

    this.onLangChange();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.onBreadcrumbsChange();
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
            isDisabled: true,
          },
        ],
      })
    );
  }

  public fetchPosts(): void {
    this.projectService.foundAllProjects().subscribe((value) => {
      this.store.dispatch(ProjectsActions.setProjects({ projects: value }));
      this.projects = value;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }

  public addItem(): void {
    this.router.navigate(['/layout/project/addinfo']);
  }

  public onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

  public deleteItem(project: Project) {
    if (!confirm(`Are you sure you want to delete ${project.name} ?`)) {
      return;
    }
    this.projectService.deleteProject(project.id).subscribe(() => {
      this.projects$ = this.projectService.foundAllProjects();
    });
  }
}
