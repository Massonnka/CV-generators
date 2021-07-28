import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-project-info',
  templateUrl: './project-add-info.component.html',
  styleUrls: ['./project-add-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectAddInfoComponent implements OnInit {
  constructor(
    private location: Location,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) { }

  onBack() {
    this.location.back();
  }

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  ngOnInit(): void {
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
          {
            url: '/layout/project/addinfo',
            name: 'Add Info',
          },
        ],
      })
    );
  }
}
