import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Languages } from './shared/constants/languages.constants';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class I18nModule {
  constructor(translate: TranslateService) {
    translate.addLangs([Languages[0].name, Languages[1].name]);
    const browserLang = translate.getBrowserLang();
    translate.use(
      browserLang.match(/Languages[0].name|Languages[1].name/)
        ? browserLang
        : Languages[0].name
    );
  }
}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
