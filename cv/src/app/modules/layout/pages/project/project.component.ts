import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Observable } from 'rxjs';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/interfaces/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public ngOnInit(): void {
    this.projects$ = this.projectService.FoundAllProjects();
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
        ],
      })
    );
  }

  public addItem(): void {
    const log = this.router.navigate(['/layout/project/addinfo']);
  }
}
