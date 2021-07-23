import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Themes } from 'src/app/shared/constants/themes.constants';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderComponent implements OnInit {
  count$: Observable<number>;

  @Output() public changeState = new EventEmitter();
  @Output() public changeTheme = new EventEmitter();

  public isVisible = true;

  private currentThemeIndex = 0;
  private themes = [Themes.Light, Themes.Dark];

  public ngOnInit(): void {
    this.onChangeTheme();
    this.changeTheme.emit(Themes.Light);
  }

  onChangeState() {
    this.changeState.emit(this.isVisible);
    this.isVisible = !this.isVisible;
  }

  public onChangeTheme(): void {
    this.changeTheme.emit(this.themes[this.currentThemeIndex]);
    this.currentThemeIndex > this.themes.length - 2 ? this.currentThemeIndex = 0 : this.currentThemeIndex++; 
  }

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  public increment(): any {
    console.log(this.count$);
  }
 
  public decrement(): any {
    console.log(this.count$);
  }
 
  public reset(): any {
    console.log(this.count$);
  }
}
