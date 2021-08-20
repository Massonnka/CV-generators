import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
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
  // @HostBinding('class') public currentTheme: string = Themes.Light;
  // constructor(private store: Store) {}

  // public ngOnInit(): void {
  public currentTheme: string = Themes.Light;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.initThemeListener();
  }

  public initThemeListener(): void {
    this.store.select(selectTheme).subscribe((value) => {
      this.document.body.classList.remove(this.currentTheme);
      this.currentTheme = value.theme;
      this.document.body.classList.add(this.currentTheme);
    });
  }
}
