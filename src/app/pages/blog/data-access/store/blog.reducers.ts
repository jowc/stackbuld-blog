import { createReducer, on } from '@ngrx/store';
import * as BlogActions from './blog.actions';
import {
  ListInterface,
  PostPreviewInterface,
} from '../../../../shared/utils/types/model';

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
  data: null,
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
    data: { post, ...state.data.data },
    message: '',
    status: StatusEnum.success,
  })),
  on(BlogActions.addPostFailure, (state, { message }) => ({
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
    const copiedPosts: PostPreviewInterface[] = [...state.data.data];
    const oldPostIndex = (<PostPreviewInterface[]>state.data).findIndex(
      (post) => post.id === post.id
    );
    copiedPosts[oldPostIndex] = post;
    return {
      ...state,
      data: copiedPosts,
      message: '',
      status: StatusEnum.success,
    };
  }),
  on(BlogActions.deletePost, (state) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.deletePostSuccess, (state, { id }) => ({
    ...state,
    data: (<PostPreviewInterface[]>state.data.data).filter(
      (post) => post.id !== id
    ),
    message: '',
    status: StatusEnum.loading,
  })),
  on(BlogActions.deletePostFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  }))
);
