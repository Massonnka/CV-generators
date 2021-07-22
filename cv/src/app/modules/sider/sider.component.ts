import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Themes } from 'src/app/shared/constants/themes.constants';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
})
export class SiderComponent implements OnInit {
  @Output() public changeState = new EventEmitter();
  @Output() public changeTheme = new EventEmitter();

  public isVisible = true;

  private currentThemeIndex = 0;

  private themes: any = [];
  
  enumValues<T extends object>(enumeration: any): Array<T[keyof T]> {
    return Object
        .keys(enumeration)
        .filter(k => isNaN(Number(k)))
        .map(k => enumeration[k]);
  }

  public ngOnInit(): void {
    this.onChangeTheme();
    this.themes = this.enumValues(Themes); 
    this.changeTheme.emit(Themes.Light);
  }

  onChangeState() {
    this.changeState.emit(this.isVisible);
    this.isVisible = !this.isVisible;
  }

  public onChangeTheme(): void {
    this.currentThemeIndex > this.themes.length - 2 ? this.currentThemeIndex = 0 : this.currentThemeIndex++;
    this.changeTheme.emit(this.themes[this.currentThemeIndex]);
    console.log(this.currentThemeIndex);    
  }
}
