import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
