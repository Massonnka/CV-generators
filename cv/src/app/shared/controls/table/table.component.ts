import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() public data: any[] = [];
  @Input() public bodyTemplate: TemplateRef<any>;
  @Input() public headTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
