import { createReducer, on } from '@ngrx/store';
import { Languages } from 'src/app/shared/constants/languages.constants';

import * as LanguageActions from './languages.actions';

export const languageFeatureKey = 'language';

export interface LanguagesState {
  language: string;
}
const initialState: LanguagesState = {
  language: null,
};

export const languageReducer = createReducer(
  initialState,
  on(LanguageActions.setLanguage, (state, { language }) => {
    return {
      ...state,
      language: language,
    };
  })
);
