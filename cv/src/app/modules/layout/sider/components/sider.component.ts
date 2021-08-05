import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Themes } from 'src/app/shared/constants/themes.constants';
import { toggleSidebar } from 'src/app/store/sidebar/sidebar.actions';
import { setTheme } from 'src/app/store/themes/themes.actions';
import { selectTheme } from 'src/app/store/themes/themes.selectors';
import { selectSidebar } from './../../../../store/sidebar/sidebar.selectors';
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderComponent implements OnInit {
  @Output() public changeTheme = new EventEmitter();

  constructor(private store: Store<{ toggle: boolean; theme: string }>) {}

  public isVisible$: Observable<boolean> = this.store.select(selectSidebar);
  public isVisible: boolean = true;

  private currentThemeIndex = 1;
  private themes = [Themes.Light, Themes.Dark];

  public ngOnInit(): void {
    this.isVisible$.subscribe((value) => (this.isVisible = value));
  }

  public onChangeTheme(): void {
    this.store.dispatch(
      setTheme({
        theme: this.themes[this.currentThemeIndex],
      })
    );

    this.currentThemeIndex > this.themes.length - 2
      ? (this.currentThemeIndex = 0)
      : this.currentThemeIndex++;
  }

  public onChangeState(): void {
    this.store.dispatch(toggleSidebar());
  }
}
