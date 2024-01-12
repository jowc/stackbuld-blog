import { ActionReducerMap } from '@ngrx/store';
import {
  BlogsReducer,
  BlogsStateInterface,
} from '../../../pages/blog/data-access/store/blogs.reducers';
import {
  BlogReducer,
  BlogStateInterface,
} from '../../../pages/blog/feature/single-blog/data-access/store/blog.reducer';

export interface AppState {
  blogs: BlogsStateInterface;
  blog: BlogStateInterface;
}

export const AppReducer: ActionReducerMap<AppState> = {
  blogs: BlogsReducer,
  blog: BlogReducer,
};
