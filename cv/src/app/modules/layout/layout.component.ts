import {
  Component, EventEmitter, Output
} from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Themes } from 'src/app/shared/constants/themes.constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public pages = [
    { name: 'Dashboard', iconType: 'dashboard', translateKey: 'pages.dashboard' },
    { name: 'Employee', iconType: 'form', translateKey: 'pages.employee' },
    { name: 'Project', iconType: 'database', translateKey: 'pages.project' },
  ];
  public siderVisible = true;

  constructor(private stateService: StateService) { }

  public onChangeTheme(value: Themes): void {
    this.stateService.theme.next(value);
  }
}
