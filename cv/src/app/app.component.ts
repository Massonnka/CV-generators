import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateService } from './services/state.service';
import { Themes } from './shared/constants/themes.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @HostBinding('class') public class = '';
  constructor(private translateService: TranslateService, private stateService: StateService) {}

  public ngOnInit(): void {
    this.initThemeListener();
    this.translateService.setDefaultLang(
      environment.localization.defaultLanguage
    );
  }

  public initThemeListener(): void {
    this.stateService.theme
      .subscribe(value => {
        this.class = value;
      });
  }
}
