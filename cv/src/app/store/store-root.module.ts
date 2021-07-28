import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { sidebarReducer } from './sidebar/sidebar.reducer';
import { themeReducer } from './Themes/themes.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ toggle: sidebarReducer, changeTheme: themeReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class StoreRootModule {}
