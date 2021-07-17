import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  public pages = [
    { name: 'Dashboard', iconType: 'dashboard' },
    { name: 'Employee', iconType: 'form' },
    { name: 'Project', iconType: 'database' },
  ];

  constructor(private elRef: ElementRef) {}

  private siderVisible = true;

  toggleSider(): void {
    const sider = this.elRef.nativeElement.querySelector('.sider');

    if (this.siderVisible) {
      sider.style.width = '10px';
      sider.style.flex = '0 0 10px';
      this.siderVisible = !this.siderVisible;
    } else {
      sider.style.width = '200px';
      sider.style.flex = '0 0 200px';
      this.siderVisible = !this.siderVisible;
    }
  }

  ngOnInit(): void {}
}
