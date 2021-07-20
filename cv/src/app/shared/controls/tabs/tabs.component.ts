import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() public data: any[] = [];
  @Input() public bodyTemplate: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
