import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Themes } from './shared/constants/themes.constants';
import { selectTheme } from './store/themes/themes.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @HostBinding('class') public currentTheme: string = Themes.Light;
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.initThemeListener();
  }

  public initThemeListener(): void {
    this.store
      .select(selectTheme)
      .subscribe((value) => (this.currentTheme = value.theme));
  }
}
