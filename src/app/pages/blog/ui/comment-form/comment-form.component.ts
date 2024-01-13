import { Component, Input, inject } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/ui/form/button/button.component';
import { ErrorTextComponent } from '../../../../shared/ui/form/error-text/error-text.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { CommentStateInterface } from '../../feature/single-blog/data-access/store/comment.reducers';
import { environment } from '../../../../../environments/environment.development';
import { selectCommentState } from '../../feature/single-blog/data-access/store/comment.selector';
import { AsyncPipe } from '@angular/common';
import { CommentCreateInterface } from '../../../../shared/utils/types/model';
import { addComment } from '../../feature/single-blog/data-access/store/comment.actions';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ErrorTextComponent,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './comment-form.component.html',
})
export class BlogCommentFormComponent {
  private readonly store = inject(Store<AppState>);
  @Input({ required: true }) postId!: string;

  commentState$ = this.store.select(selectCommentState);

  commentForm = new FormGroup({
    message: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500),
      ],
    }),
    post: new FormControl(this.postId),
    owner: new FormControl(environment['user-id']),
  });

  get message() {
    return this.commentForm.get('message');
  }

  submit() {
    const comment = {
      ...this.commentForm.value,
      post: this.postId,
    } as CommentCreateInterface;
    return this.store.dispatch(addComment({ comment }));
  }
}
