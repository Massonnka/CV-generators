import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/app/shared/constants/languages.constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  public languages = [Languages.English, Languages.Russian];
  public isRegistration: boolean = false;
  constructor(private translateService: TranslateService) {}

  public switchLanguage(language: string): void {
    this.translateService.use(language);
  }

  public switchAuthPage(): void {
    this.isRegistration = !this.isRegistration;
  }
}
