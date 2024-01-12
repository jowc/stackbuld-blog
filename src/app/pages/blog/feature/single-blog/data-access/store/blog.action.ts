import { createAction, props } from '@ngrx/store';
import { PostParamsInterface } from '../../../../data-access/service/post.service';
import { PostPreviewInterface } from '../../../../../../shared/utils/types/model';

export const getPost = createAction(
  '[single-blog feature] get posts',
  props<{ params: PostParamsInterface }>()
);
export const getPostSuccess = createAction(
  '[single-blog feature] get post success',
  props<{ post: PostPreviewInterface }>()
);
export const getPostFailure = createAction(
  '[single-blog feature] get post failure',
  props<{ message: string }>()
);
