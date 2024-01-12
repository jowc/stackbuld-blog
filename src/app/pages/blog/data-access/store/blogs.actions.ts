import { createAction, props } from '@ngrx/store';
import * as models from '../../../../shared/utils/types/model';
import { PostParamsInterface } from '../service/post.service';

export const getPosts = createAction(
  '[blogs feature] get posts',
  props<{ params: PostParamsInterface }>()
);
export const getPostsSuccess = createAction(
  '[blogs feature] get post success',
  props<{ posts: models.ListInterface }>()
);
export const getPostsFailure = createAction(
  '[blogs feature] get post failure',
  props<{ message: string }>()
);

export const addPost = createAction(
  '[blogs feature] add post',
  props<{ post: models.PostCreateInterface }>()
);
export const addPostSuccess = createAction(
  '[blogs feature] add post success',
  props<{ post: models.PostPreviewInterface }>()
);
export const addPostFailure = createAction(
  '[blogs feature] add posts failure',
  props<{ message: string }>()
);

export const deletePost = createAction(
  '[blogs feature] delete post',
  props<{ id: string }>()
);
export const deletePostSuccess = createAction(
  '[blogs feature] delete post success',
  props<{ id: string }>()
);
export const deletePostFailure = createAction(
  '[blogs feature] delete post failure',
  props<{ message: string }>()
);