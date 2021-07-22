import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
})
export class SiderComponent implements OnInit {
  public sidebarStyles = { visible: true };

  @Output() public changeState = new EventEmitter();

  public isVisible = true;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.sidebarStyles = { visible: true };
  }

  onChangeState() {
    this.sidebarStyles.visible = !this.sidebarStyles.visible;
    
    this.changeState.emit(this.isVisible);
    this.isVisible = !this.isVisible;
  }
}
