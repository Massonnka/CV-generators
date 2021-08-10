import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-project-info',
  templateUrl: './project-add-info.component.html',
  styleUrls: ['./project-add-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectAddInfoComponent implements OnInit {
  constructor(
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  public onBack(): void {
    this.location.back();
  }

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  private breadcrumbHome: string;
  private breadcrumbProject: string;
  private breadcrumbAddInfo: string;

  public ngOnInit(): void {
    this.translateService
      .get(['pages.home', 'pages.project', 'pages.info'])
      .subscribe((translations) => {
        this.breadcrumbHome = this.translateService.instant(
          translations['pages.home']
        );
        this.breadcrumbProject = this.translateService.instant(
          translations['pages.project']
        );
        this.breadcrumbAddInfo = this.translateService.instant(
          translations['pages.info']
        );
      });

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
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
            name: this.breadcrumbProject,
            isDisabled: false,
          },
          {
            url: '/layout/project/addinfo',
            name: this.breadcrumbAddInfo,
            isDisabled: true,
          },
        ],
      })
    );
  }
}
