import { createAction, props } from '@ngrx/store';

export const getBlogs = createAction('[blog feature] get blogs');
export const getBlogsSuccess = createAction(
  '[blog feature] get blogs success',
  props<{ data: any }>()
);
export const getBlogsFailure = createAction(
  '[blog feature] get blogs failure',
  props<{ message: string }>()
);
