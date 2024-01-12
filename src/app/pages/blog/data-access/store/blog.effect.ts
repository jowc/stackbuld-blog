import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  switchMap,
  tap,
  concatMap,
} from 'rxjs/operators';
import { PostService } from '../service/post.service';
import * as postActions from './blog.actions';

@Injectable()
export class BlogEffects {
  private readonly actions$ = inject(Actions);
  private readonly postService = inject(PostService);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.getPosts),
      switchMap(() =>
        this.postService.getPosts().pipe(
          //   tap((posts) => console.log(posts)),
          map((posts) => postActions.getPostsSuccess({ posts })),
          catchError((error) => {
            return of(postActions.getPostsFailure({ message: error.message }));
          })
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.addPost),
      concatMap(({ post, type }) =>
        this.postService.createPost(post).pipe(
          map((post) => postActions.addPostSuccess({ post })),
          catchError((error) =>
            of(postActions.addPostFailure({ message: error.message }))
          )
        )
      )
    )
  );

  editPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.editPost),
      switchMap(({ post, id, type }) =>
        this.postService.updatePost(id, post).pipe(
          map((post) => postActions.editPostSuccess({ post })),
          catchError((error) =>
            of(postActions.addPostFailure({ message: error.message }))
          )
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.deletePost),
      mergeMap(({ id, type }) =>
        this.postService.deletePost(id).pipe(
          map((post) => postActions.deletePostSuccess({ id })),
          catchError((error) =>
            of(postActions.deletePostFailure({ message: error.message }))
          )
        )
      )
    )
  );
}
