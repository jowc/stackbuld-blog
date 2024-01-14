import { createReducer, on } from '@ngrx/store';
import * as BlogActions from './blogs.actions';
import {
  ListInterface,
  PostPreviewInterface,
} from '../../../../shared/utils/types/model';
import * as postActions from '../../feature/single-blog/data-access/store/blog.action';

export enum StatusEnum {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface BlogsStateInterface {
  data: ListInterface | any;
  message: string;
  status: StatusEnum;
}

// write a complete reducer using the above interface

export const initialState: BlogsStateInterface = {
  data: {
    data: [],
    total: 0,
    page: 0,
    limit: 0,
  },
  message: '',
  status: StatusEnum.pending,
};

export const BlogsReducer = createReducer(
  initialState,
  on(BlogActions.getPosts, (state) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.getPostsSuccess, (state, { posts }) => ({
    ...state,
    data: posts,
    message: '',
    status: StatusEnum.success,
  })),
  on(BlogActions.getPostsFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  })),
  on(BlogActions.addPost, (state, { post }) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.addPostSuccess, (state, { post }) => ({
    ...state,
    data: {
      ...state.data,
      data: [post, ...state.data.data],
    },
    message: '',
    status: StatusEnum.success,
  })),
  on(BlogActions.addPostFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  })),
  on(BlogActions.deletePost, (state) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.deletePostSuccess, (state, { id }) => ({
    ...state,
    data: {
      ...state.data,
      data: state.data.data.filter((commentId: string) => commentId !== id),
      message: '',
      status: StatusEnum.success,
    },
  })),
  on(BlogActions.deletePostFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  }))
);
