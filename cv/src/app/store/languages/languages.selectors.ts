import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Languages } from 'src/app/shared/constants/languages.constants';
import { languageFeatureKey } from './languages.reducers';

const selectLanguageState = createFeatureSelector(languageFeatureKey);

export const selectLanguage = createSelector(
  selectLanguageState,
  (state) => state as string
);
