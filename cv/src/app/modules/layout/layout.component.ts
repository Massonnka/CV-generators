import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public pages = [
    { name: 'Dashboard', iconType: 'dashboard' },
    { name: 'Employee', iconType: 'form' },
    { name: 'Project', iconType: 'database' },
  ];

  constructor(private elRef: ElementRef) {}

  public isVisible = true;

  toggleSider(): void {
    const sider = this.elRef.nativeElement.querySelector('.sider');
    const siderItem = this.elRef.nativeElement.querySelector('.list');

    if (this.isVisible) {
      sider.style.width = '48px';
      sider.style.flex = '0 0 48px';
      this.isVisible = !this.isVisible;
      siderItem.style.width = '48px';
    } else {
      sider.style.width = '200px';
      sider.style.flex = '0 0 200px';
      siderItem.style.width = '200px';
      this.isVisible = !this.isVisible;
    }
  }

  ngOnInit(): void {}
}
