import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleButtonComponent { }
