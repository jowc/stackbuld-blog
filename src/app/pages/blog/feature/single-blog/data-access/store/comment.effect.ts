import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  switchMap,
  concatMap,
} from 'rxjs/operators';
import { PostService } from '../../../../data-access/service/post.service';
import * as CommentActions from './comment.actions';

@Injectable()
export class CommentEffects {
  private readonly actions$ = inject(Actions);
  private readonly postService = inject(PostService);

  loadComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.getComments),
      switchMap(({ id, type }) =>
        this.postService.getPostComments(id).pipe(
          map((comments) => CommentActions.getCommentSuccess({ comments })),
          catchError((error) => {
            return of(
              CommentActions.getCommentFailure({ message: error.message })
            );
          })
        )
      )
    )
  );

  addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.addComment),
      concatMap(({ comment, type }) =>
        this.postService.createPostComment(comment).pipe(
          map((comment) => {
            return CommentActions.addCommentSuccess({ comment });
          }),
          catchError((error) =>
            of(CommentActions.addCommentFailure({ message: error.message }))
          )
        )
      )
    )
  );

  deleteComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.deleteComment),
      mergeMap(({ id, type }) =>
        this.postService.deletePostComment(id).pipe(
          map((post) => {
            return CommentActions.deleteCommentSuccess({ id });
          }),
          catchError((error) =>
            of(CommentActions.deleteCommentFailure({ message: error.message }))
          )
        )
      )
    )
  );
}
