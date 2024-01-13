import { Component, Input, inject, signal } from '@angular/core';
import { CommentInterface } from '../../../../shared/utils/types/model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { Store } from '@ngrx/store';
import { deleteComment } from '../../feature/single-blog/data-access/store/comment.actions';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './comment.component.html',
  styles: `:host{width: 100%}`,
})
export class BlogCommentComponent {
  private readonly store = inject(Store<AppState>);
  @Input() comment!: CommentInterface;

  faTrash = signal(faTrash);

  deletePost(id: string) {
    return this.store.dispatch(deleteComment({ id }));
  }
}
