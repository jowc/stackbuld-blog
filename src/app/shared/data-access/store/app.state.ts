import { ActionReducerMap } from '@ngrx/store';
import {
  BlogsReducer,
  BlogsStateInterface,
} from '../../../pages/blog/data-access/store/blogs.reducers';
import {
  BlogReducer,
  BlogStateInterface,
} from '../../../pages/blog/feature/single-blog/data-access/store/blog.reducer';
import {
  CommentStateInterface,
  CommentsReducer,
} from '../../../pages/blog/feature/single-blog/data-access/store/comment.reducers';

export interface AppState {
  blogs: BlogsStateInterface;
  blog: BlogStateInterface;
  comments: CommentStateInterface;
}

export const AppReducer: ActionReducerMap<AppState> = {
  blogs: BlogsReducer,
  blog: BlogReducer,
  comments: CommentsReducer,
};
