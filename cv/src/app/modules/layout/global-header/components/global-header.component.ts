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
  public date: number | string;
  public visible: boolean = false;

  @Input() count: number = 1;

  constructor(
    private translateService: TranslateService,
    public authService: AuthService
  ) { }
  public currentLanguage: string = this.translateService.currentLang || 'en';

  public change() {
    this.createdAt = localStorage.getItem('user-date-reg');
    if (this.createdAt) {
      this.date = Math.round((Date.now() - Date.parse(this.createdAt)) / 86400000);
      console.log(this.date);

      if (this.date > 30) {
        if (this.date > 60) {
          this.date = Math.round(this.date / 30) + ' month ago'
        } else {
          this.date = 'One month ago';
        }
      }

      if (this.date > 1) {
        this.date = (this.date) + ' days ago'
      } else {
        this.date = 'One day ago';
      }
    }

    this.count = 0;
  }

  public switchLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  public ngOnInit() {
    this.firstName = localStorage.getItem('user-firstName');
    this.lastName = localStorage.getItem('user-lastName');
    this.userName = this.firstName + " " + this.lastName;
  }

  public logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
