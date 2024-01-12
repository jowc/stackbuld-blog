import { createAction, props } from '@ngrx/store';
import * as models from '../../../../shared/utils/types/model';

export const getPosts = createAction('[blog feature] get posts');
export const getPostsSuccess = createAction(
  '[blog feature] get post success',
  props<{ posts: models.ListInterface }>()
);
export const getPostsFailure = createAction(
  '[blog feature] get post failure',
  props<{ message: string }>()
);

export const addPost = createAction(
  '[blog feature] add post',
  props<{ post: models.PostCreateInterface }>()
);
export const addPostSuccess = createAction(
  '[blog feature] add post success',
  props<{ post: models.PostPreviewInterface }>()
);
export const addPostFailure = createAction(
  '[blog feature] add posts failure',
  props<{ message: string }>()
);

export const editPost = createAction(
  '[blog feature] edit post',
  props<{ id: string; post: Partial<models.PostCreateInterface> }>()
);
export const editPostSuccess = createAction(
  '[blog feature] edit post success',
  props<{ post: models.PostPreviewInterface }>()
);
export const editPostFailure = createAction(
  '[blog feature] edit post failure',
  props<{ message: string }>()
);

export const deletePost = createAction(
  '[blog feature] delete post',
  props<{ id: string }>()
);
export const deletePostSuccess = createAction(
  '[blog feature] delete post success',
  props<{ id: string }>()
);
export const deletePostFailure = createAction(
  '[blog feature] delete post failure',
  props<{ message: string }>()
);
