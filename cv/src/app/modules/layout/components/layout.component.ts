import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PAGES } from 'src/app/shared/mocks/pages.mocks';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public pages = PAGES;
}
