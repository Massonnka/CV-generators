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
    { name: 'Dashboard', iconType: 'dashboard', translateKey: 'pages.dashboard' },
    { name: 'Employee', iconType: 'form', translateKey: 'pages.employee' },
    { name: 'Project', iconType: 'database', translateKey: 'pages.project' },
  ];

  private lightTheme = true;

  constructor(private elRef: ElementRef) { }

  public siderVisible = true;

  toggleSider(event: any): void {
  }

  ngOnInit(): void {
  }
}
