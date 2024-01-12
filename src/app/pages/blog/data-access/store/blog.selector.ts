import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../shared/data-access/store/app.state';

export const selectBlogAll = (state: AppState) => state.blog;

export const selectBlog = createSelector(
  selectBlogAll,
  (state) => state.data.data
);
