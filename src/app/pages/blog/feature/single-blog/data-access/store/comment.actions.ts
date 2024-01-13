import { createAction, props } from '@ngrx/store';
import {
  CommentCreateInterface,
  CommentInterface,
} from '../../../../../../shared/utils/types/model';

export const addComment = createAction(
  '[blogs feature] add post',
  props<{ comment: CommentCreateInterface }>()
);
export const addCommentSuccess = createAction(
  '[blogs feature] add post success',
  props<{ comment: CommentInterface }>()
);
export const addCommentFailure = createAction(
  '[blogs feature] add posts failure',
  props<{ message: string }>()
);

export const getComments = createAction(
  '[single-blog feature] get comments',
  props<{ id: string }>()
);
export const getCommentSuccess = createAction(
  '[single-blog feature] get comments success',
  props<{ comments: CommentInterface[] }>()
);
export const getCommentFailure = createAction(
  '[single-blog feature] get comments failure',
  props<{ message: string }>()
);

export const deleteComment = createAction(
  '[blogs feature] delete comment',
  props<{ id: string }>()
);
export const deleteCommentSuccess = createAction(
  '[blogs feature] delete comment success',
  props<{ id: string }>()
);
export const deleteCommentFailure = createAction(
  '[blogs feature] delete comment failure',
  props<{ message: string }>()
);
