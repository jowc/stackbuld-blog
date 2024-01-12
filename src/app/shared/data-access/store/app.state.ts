import { ActionReducerMap } from '@ngrx/store';
import {
  BlogReducer,
  BlogsStateInterface,
} from '../../../pages/blog/data-access/store/blog.reducers';

export interface AppState {
  blog: BlogsStateInterface;
}

export const AppReducer: ActionReducerMap<AppState> = {
  blog: BlogReducer,
};
