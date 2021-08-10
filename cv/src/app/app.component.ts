import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { selectTheme } from './store/themes/themes.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @HostBinding('class') public currentTheme: string = 'light';
  constructor(
    private translateService: TranslateService,
    private store: Store
  ) { }
  getTranslation(lang: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  public ngOnInit(): void {
    this.translateService.setDefaultLang(
      environment.localization.defaultLanguage
    );
    this.initThemeListener();
  }

  public initThemeListener(): void {
    this.store
      .select(selectTheme)
      .subscribe((value) => (this.currentTheme = value.theme));
  }
}
