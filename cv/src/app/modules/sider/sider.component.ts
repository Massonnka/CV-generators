import { transition } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
})
export class SiderComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {}
}
