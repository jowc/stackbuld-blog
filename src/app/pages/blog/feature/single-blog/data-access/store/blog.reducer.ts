import { createReducer, on } from '@ngrx/store';
import { PostPreviewInterface } from '../../../../../../shared/utils/types/model';
import * as BlogActions from './blog.action';

export enum StatusEnum {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface BlogStateInterface {
  data: PostPreviewInterface | any;
  message: string;
  status: StatusEnum;
}

// write a complete reducer using the above interface

export const initialState: BlogStateInterface = {
  data: null,
  message: '',
  status: StatusEnum.pending,
};

export const BlogReducer = createReducer(
  initialState,
  on(BlogActions.getPost, (state) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.getPostSuccess, (state, { post }) => ({
    ...state,
    data: post,
    message: '',
    status: StatusEnum.success,
  })),
  on(BlogActions.getPostFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  })),
  on(BlogActions.editPost, (state, { post }) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.editPostSuccess, (state, { post }) => {
    const updatedPost = { ...state.data, ...post };
    return {
      ...state,
      data: updatedPost,
      message: '',
      status: StatusEnum.success,
    };
  })
);
