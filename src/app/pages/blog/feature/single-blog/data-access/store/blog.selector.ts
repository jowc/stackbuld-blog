import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../../shared/data-access/store/app.state';

export const postState = (state: AppState) => state.blog;

export const selectPostState = createSelector(postState, (state) => state);
