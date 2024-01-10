import { createReducer, on } from '@ngrx/store';
import * as BlogActions from './blog.actions';

export enum StatusEnum {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface BlogsStateInterface {
  data: any;
  message: string;
  status: StatusEnum;
}

export const initialState: BlogsStateInterface = {
  data: null,
  message: '',
  status: StatusEnum.pending,
};

export const BlogsReducer = createReducer(
  initialState,
  on(BlogActions.getBlogs, (state) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.getBlogsSuccess, (state, { data }) => ({
    ...state,
    data,
    message: '',
    status: StatusEnum.success,
  })),
  on(BlogActions.getBlogsFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  }))
);
