import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { sidebarReducer } from 'src/app/store/reducers/sidebar.reducer';
import { SiderComponent } from './sider.component';

@NgModule({
  declarations: [SiderComponent],
  imports: [CommonModule, NzIconModule, DefaultButtonModule,
  StoreModule.forFeature('toggle', sidebarReducer)],
  exports: [SiderComponent],
})
export class SiderModule {}
