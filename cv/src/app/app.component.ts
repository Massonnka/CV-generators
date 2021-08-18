import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Themes } from './shared/constants/themes.constants';
import { selectTheme } from './store/themes/themes.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public currentTheme: string = Themes.Light;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService,
    private store: Store
  ) { }

  public ngOnInit(): void {
    // this.translateService.setDefaultLang(
    //    environment.localization.defaultLanguage
    // );

    this.initThemeListener();
  }

  public initThemeListener(): void {
    this.store
      .select(selectTheme)
      .subscribe((value) => {
        this.document.body.classList.remove(this.currentTheme);
        this.currentTheme = value.theme;
        this.document.body.classList.add(this.currentTheme);
      });
  }
}
