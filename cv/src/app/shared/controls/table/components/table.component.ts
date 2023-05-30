import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() public data: any[] = [];
  @Input() public page: number = 1;
  @Input() public bodyTemplate: TemplateRef<any>;
  @Input() public headTemplate: TemplateRef<any>;
  @Input() public isShowPagination: boolean = true;

}
