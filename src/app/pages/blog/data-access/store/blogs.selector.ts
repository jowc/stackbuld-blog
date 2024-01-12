import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../shared/data-access/store/app.state';

export const selectBlogAll = (state: AppState) => state.blogs;

export const selectBlogState = createSelector(selectBlogAll, (state) => state);
