import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
