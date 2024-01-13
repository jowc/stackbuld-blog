import { createReducer, on } from '@ngrx/store';
import {
  CommentInterface,
  CommentListInterface,
} from '../../../../../../shared/utils/types/model';
import * as CommentActions from './comment.actions';

export enum StatusEnum {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface CommentStateInterface {
  comments: CommentListInterface;
  message: string;
  status: StatusEnum;
}

// write a complete reducer using the above interface

export const initialState: CommentStateInterface = {
  comments: {
    data: [],
    total: 0,
    page: 0,
    limit: 0,
  },
  message: '',
  status: StatusEnum.pending,
};

export const CommentsReducer = createReducer(
  initialState,
  on(CommentActions.getComments, (state) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(CommentActions.getCommentSuccess, (state, { comments }) => ({
    ...state,
    comments: { ...state.comments, ...comments },
    message: '',
    status: StatusEnum.success,
  })),
  on(CommentActions.getCommentFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  })),
  on(CommentActions.addComment, (state, { comment }) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(CommentActions.addCommentSuccess, (state, { comment }) => ({
    ...state,
    comments: {
      ...state.comments,
      data: [comment, ...state.comments.data],
    },
    message: '',
    status: StatusEnum.success,
  })),
  on(CommentActions.addCommentFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  })),
  on(CommentActions.deleteComment, (state) => ({
    ...state,
    message: '',
    status: StatusEnum.loading,
  })),
  on(CommentActions.deleteCommentSuccess, (state, { id }) => ({
    ...state,
    comments: {
      ...state.comments,
      data: state.comments.data.filter((comment) => comment.id !== id),
    },
    message: '',
    status: StatusEnum.success,
  })),
  on(CommentActions.deleteCommentFailure, (state, { message }) => ({
    ...state,
    message,
    status: StatusEnum.error,
  }))
);
