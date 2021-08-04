import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { selectTheme } from './store/themes/themes.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @HostBinding('class') public currentTheme = '';
  constructor(
    private translateService: TranslateService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.initThemeListener();
    this.translateService.setDefaultLang(
      environment.localization.defaultLanguage
    );
  }

  public initThemeListener(): void {
    this.store
      .select(selectTheme)
      .subscribe((value) => (this.currentTheme = value.theme));
  }
}
