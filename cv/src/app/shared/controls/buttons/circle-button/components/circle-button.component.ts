import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { NzTooltipTrigger } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleButtonComponent { }
