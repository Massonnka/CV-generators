import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent {
  public languages: string[] = ['en', 'ru'];

  constructor(
    private translateService: TranslateService,
    public authService: AuthService
  ) {}
  public currentLanguage: string = this.translateService.currentLang || 'en';

  public switchLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  public logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
