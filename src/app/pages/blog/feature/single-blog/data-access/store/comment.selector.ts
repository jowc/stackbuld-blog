import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../../shared/data-access/store/app.state';

export const commentState = (state: AppState) => state.comments;

export const selectCommentState = createSelector(
  commentState,
  (state) => state
);
