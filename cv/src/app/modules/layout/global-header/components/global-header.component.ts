import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { formatDistance } from 'date-fns';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { EmployeeService } from 'src/app/core/services/employees.service';
import {
  adminIcon,
  headLogo,
  smileIcon,
} from 'src/app/shared/constants/images.constants';
import { Languages } from 'src/app/shared/constants/languages.constants';
import { Employee } from 'src/app/shared/interfaces/employees.interface';
import { setLanguage } from 'src/app/store/languages/languages.actions';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent implements OnInit {
  public languages = Languages;
  public createdAt = String(localStorage.getItem('user-date-reg'));
  public user: Employee;
  public visible: boolean = false;
  public likes = 0;
  public dislikes = 0;
  public time: string | TemplateRef<void> | undefined;
  public headLogo = headLogo;
  public adminIcon = adminIcon;
  public smileIcon = smileIcon;
  public selectedLanguage: any = { name: 'en', label: 'EN' };

  @Input() count: number = 1;

  constructor(
    private translateService: TranslateService,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef,
    private store: Store,
    private router: Router
  ) {}

  public currentLanguage: string =
    this.translateService.currentLang || Languages[0].name;

  public ngOnInit() {
    this.store.dispatch(setLanguage({ language: this.currentLanguage }));

    const userId = localStorage.getItem('user-id');

    this.employeeService
      .getEmployeeById(userId)
      .pipe(filter((user) => Boolean(user)))
      .subscribe((user) => {
        this.user = user;
        console.log(user);
        this.cdr.markForCheck();
      });
  }

  public change() {
    this.time = formatDistance(new Date(), new Date(this.createdAt));
    this.count = 0;
  }

  public like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  public dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  public switchLanguage(language: string): void {
    this.store.dispatch(setLanguage({ language: language }));
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  public openProfile(): void {
    this.router.navigate(['/layout/profile']);
  }

  public logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
