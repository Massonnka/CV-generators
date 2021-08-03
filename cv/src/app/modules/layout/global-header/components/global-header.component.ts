import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent implements OnInit {
  public languages: string[] = ['en', 'ru'];
  public firstName: string | null;
  public lastName: string | null;
  public userName: string | null;
  public createdAt: string | null;
  public date: number;
  public visible: boolean = false;

  @Input() count: number = 1;

  constructor(
    private translateService: TranslateService,
    public authService: AuthService
  ) { }
  public currentLanguage: string = this.translateService.currentLang || 'en';

  change(): void {
    this.count = 0;
  }

  public switchLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  public ngOnInit() {
    this.createdAt = localStorage.getItem('user-date-reg');
    this.date = Date.now();
    this.firstName = localStorage.getItem('user-firstName');
    this.lastName = localStorage.getItem('user-lastName');
    this.userName = this.firstName + " " + this.lastName;
  }

  public logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
