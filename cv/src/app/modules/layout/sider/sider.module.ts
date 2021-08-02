import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { sidebarFeatureKey, sidebarReducer } from 'src/app/store/sidebar/sidebar.reducer';
import { SiderComponent } from './components/sider.component';

@NgModule({
  declarations: [SiderComponent],
  imports: [CommonModule, NzIconModule, DefaultButtonModule,
  StoreModule.forFeature(sidebarFeatureKey, sidebarReducer)],
  exports: [SiderComponent],
})
export class SiderModule {}
