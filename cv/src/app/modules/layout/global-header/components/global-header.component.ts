import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Languages } from 'src/app/shared/constants/languages.constants';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent implements OnInit {
  public languages = [Languages.English, Languages.Russian];
  public firstName: string | null;
  public lastName: string | null;
  public userName: string | null;
  public createdAt: string | null;
  public date: number | string;
  public visible: boolean = false;

  @Input() count: number = 1;

  constructor(
    private translateService: TranslateService,
    public authService: AuthService
  ) {}
  public currentLanguage: string = this.translateService.currentLang || 'en';

  public change(): string {
    this.createdAt = localStorage.getItem('user-date-reg');
    if (!this.createdAt) {
      return 'You ate not registered yet... So, how did you enter this page?';
    } else {
      this.date = Math.round(
        (Date.now() - Date.parse(this.createdAt)) / 86400000
      );

      if (this.date > 1) {
        if (this.date > 30) {
          if (this.date > 60) {
            return this.date = Math.round(this.date / 30) + ' months ago';
          } else {
            return 'One month ago';
          }
        }
      } else {
        return 'One day ago';
      }
    }

    this.count = 0;
    return this.date = this.date + ' days ago';
  }

  public switchLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  public ngOnInit() {
    this.firstName = localStorage.getItem('user-firstName');
    this.lastName = localStorage.getItem('user-lastName');
    this.userName = this.firstName + ' ' + this.lastName;
  }

  public logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
