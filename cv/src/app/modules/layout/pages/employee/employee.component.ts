import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { EMPLOYEES } from './../../../../models/employees';
import { Store } from '@ngrx/store';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Observable } from 'rxjs';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  public users = EMPLOYEES;
  constructor(private store: Store<{ breadcrumbs: Breadcrumb[] }>) {}

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
            name: 'Home ',
          },
          {
            url: '/layout/employee',
            name: ' Employee',
          },
        ],
      })
    );
  }
}
