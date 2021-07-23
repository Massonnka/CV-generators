import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { clear, countSelector, decrease, increase, updatedAtSelector } from 'src/app/reducers/counter';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent implements OnInit {
  public languages = ['en', 'ru'];

  constructor(private translateService: TranslateService, private store: Store) { }
  public currentLanguage = this.translateService.currentLang || 'en';

  switchLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  ngOnInit(): void { }

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear());
  }
}
