import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalWindowComponent {
  public isVisible = false;

  public showModal(): void {
    this.isVisible = true;
  }

  public handleOk(): void {
    this.isVisible = false;
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

}
