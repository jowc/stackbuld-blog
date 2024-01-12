import { createAction, props } from '@ngrx/store';
import {
  PostCreateInterface,
  PostPreviewInterface,
} from '../../../../../../shared/utils/types/model';

export const getPost = createAction(
  '[single-blog feature] get post',
  props<{ id: string }>()
);
export const getPostSuccess = createAction(
  '[single-blog feature] get post success',
  props<{ post: PostPreviewInterface }>()
);
export const getPostFailure = createAction(
  '[single-blog feature] get post failure',
  props<{ message: string }>()
);

export const editPost = createAction(
  '[blog feature] edit post',
  props<{ id: string; post: Partial<PostCreateInterface> }>()
);
export const editPostSuccess = createAction(
  '[blog feature] edit post success',
  props<{ post: PostPreviewInterface }>()
);
export const editPostFailure = createAction(
  '[blog feature] edit post failure',
  props<{ message: string }>()
);