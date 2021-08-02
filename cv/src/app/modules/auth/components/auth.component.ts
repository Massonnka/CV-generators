import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  public languages = ['en', 'ru'];
  constructor(private translateService: TranslateService) {}

  public switchLanguage(language: string): void {
    this.translateService.use(language);
  }
}
