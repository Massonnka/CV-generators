import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DefaultButtonComponent } from 'src/app/shared/controls/buttons/default-button/default-button.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public pages = [
    { name: 'Dashboard', iconType: 'dashboard', translateKey: 'pages.dashboard' },
    { name: 'Employee', iconType: 'form', translateKey: 'pages.employee' },
    { name: 'Project', iconType: 'database', translateKey: 'pages.project' },
  ];

  constructor(private elRef: ElementRef) {}

  public isVisible = true;

  toggleSider(): void {
    const sider = this.elRef.nativeElement.querySelector('.sider-wrapper');
    const siderItem = this.elRef.nativeElement.querySelector('.list');

    if (this.isVisible) {
      sider.style.border = '0px';
      sider.style.width = '48px';
      sider.style.flex = '0 0 48px';
      this.isVisible = !this.isVisible;
      siderItem.style.width = '48px';
    } else {
      sider.style.width = '201px';
      sider.style.flex = '0 0 201px';
      siderItem.style.width = '201px';
      this.isVisible = !this.isVisible;
    }
  }

  changeTheme(): void {
  }

  ngOnInit(): void {
    const sider = this.elRef.nativeElement.querySelector('.sider');
    sider.style.width = '201px';
  }
}
