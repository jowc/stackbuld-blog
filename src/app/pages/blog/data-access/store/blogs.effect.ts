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
import * as postsAction from './blogs.actions';
import * as postActions from '../../feature/single-blog/data-access/store/blog.action';
import { Router } from '@angular/router';

@Injectable()
export class BlogEffects {
  private readonly actions$ = inject(Actions);
  private readonly postService = inject(PostService);
  private readonly router = inject(Router);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postsAction.getPosts),
      switchMap(({ params, type }) =>
        this.postService.getPosts(params).pipe(
          //   tap((posts) => console.log(posts)),
          map((posts) => postsAction.getPostsSuccess({ posts })),
          catchError((error) => {
            return of(postsAction.getPostsFailure({ message: error.message }));
          })
        )
      )
    )
  );

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.getPost),
      switchMap(({ id, type }) =>
        this.postService.getPost(id).pipe(
          //   tap((posts) => console.log(posts)),
          map((post) => postActions.getPostSuccess({ post })),
          catchError((error) => {
            return of(postActions.getPostFailure({ message: error.message }));
          })
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postsAction.addPost),
      concatMap(({ post, type }) =>
        this.postService.createPost(post).pipe(
          map((post) => postsAction.addPostSuccess({ post })),
          catchError((error) =>
            of(postsAction.addPostFailure({ message: error.message }))
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
          map((post) => {
            console.log({ post });
            return postActions.editPostSuccess({ post });
          }),
          catchError((error) =>
            of(postActions.editPostFailure({ message: error.message }))
          )
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postsAction.deletePost),
      mergeMap(({ id, type }) =>
        this.postService.deletePost(id).pipe(
          map((post) => {
            this.router.navigate(['/']);
            return postsAction.deletePostSuccess({ id });
          }),
          catchError((error) =>
            of(postsAction.deletePostFailure({ message: error.message }))
          )
        )
      )
    )
  );
}
