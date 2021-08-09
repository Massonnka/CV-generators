import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { formatDistance } from 'date-fns';
import { Languages } from 'src/app/shared/constants/languages.constants';
import { adminIcon, headLogo, smileIcon } from 'src/app/shared/constants/images.constants';


@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent implements OnInit {
  public languages = [Languages.English, Languages.Russian];
  public createdAt = String(localStorage.getItem('user-date-reg'));
  public firstName = localStorage.getItem('user-firstName');
  public lastName = localStorage.getItem('user-lastName');
  public userName: string | null;
  public visible: boolean = false;
  public likes = 0;
  public dislikes = 0;
  public time: string | TemplateRef<void> | undefined;
  public headLogo = headLogo;
  public adminIcon = adminIcon;
  public smileIcon = smileIcon;

  @Input() count: number = 1;

  constructor(
    private translateService: TranslateService,
    private authService: AuthService
  ) { }
  public currentLanguage: string = this.translateService.currentLang || Languages.English;

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
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  public ngOnInit() {
    this.userName = this.firstName + ' ' + this.lastName;
  }

  public logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
