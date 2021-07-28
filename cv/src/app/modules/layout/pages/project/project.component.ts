import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/models/project';
import { Store } from '@ngrx/store';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Observable } from 'rxjs';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  constructor(private store: Store<{ breadcrumbs: Breadcrumb[] }>) {}

  public projects = PROJECTS;

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public ngOnInit(): void {
    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: 'Home',
          },
          {
            url: '/layout/project',
            name: 'Project',
          },
        ],
      })
    );
  }
}
