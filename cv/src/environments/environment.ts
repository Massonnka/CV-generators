import { Languages } from 'src/app/shared/constants/languages.constants';

export const environment = {
  production: false,
  localization: {
    defaultLanguage: Languages.English,
    languages: [''],
  },
  authApi: 'http://localhost:54413/',
  storeApi: 'http://localhost:63936/',
  tokenWhiteListedDomains: ['localhost:63936'],
};
