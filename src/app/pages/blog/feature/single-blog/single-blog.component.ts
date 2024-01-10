import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BlogCommentFormComponent } from '../../ui/comment-form/comment-form.component';
import { BlogCommentComponent } from '../../ui/comment/comment.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FontAwesomeModule, BlogCommentFormComponent, BlogCommentComponent],
  templateUrl: './single-blog.component.html',
})
export class SingleBlogComponent {
  private readonly route = inject(ActivatedRoute);

  faPen = signal(faPen);
  faTrash = signal(faTrash);
}
