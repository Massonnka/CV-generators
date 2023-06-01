import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { bg } from 'src/app/shared/constants/images.constants';
import { Languages } from 'src/app/shared/constants/languages.constants';
import { setLanguage } from 'src/app/store/languages/languages.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  public languages = [Languages[0].name, Languages[1].name];
  public isRegistration: boolean = false;
  public bg = bg;

  constructor(
    private translateService: TranslateService,
    private store: Store
  ) {}

  public switchLanguage(language: string): void {
    this.translateService.use(language);
    this.store.dispatch(setLanguage({ language: language }));
  }

  public switchAuthPage(): void {
    this.isRegistration = !this.isRegistration;
  }
}
