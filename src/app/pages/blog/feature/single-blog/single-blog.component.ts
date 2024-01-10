import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BlogCommentFormComponent } from '../../ui/comment-form/comment-form.component';
import { BlogCommentComponent } from '../../ui/comment/comment.component';
import { SubscriptionHandler } from '../../../../shared/utils/sub-handler/subscription-handler';
import { mockblog } from '../../data-access/service/mock-api';
import { EditBlogFormComponent } from '../../ui/edit-blog-form/edit-blog-form.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    FontAwesomeModule,
    BlogCommentFormComponent,
    BlogCommentComponent,
    EditBlogFormComponent,
  ],
  templateUrl: './single-blog.component.html',
})
export class SingleBlogComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  faPen = signal(faPen);
  faTrash = signal(faTrash);
  faXmark = signal(faXmark);
  blog = signal<any>({});

  @ViewChild('editModal', { static: false })
  editModal!: ElementRef<HTMLDialogElement>;

  sub = new SubscriptionHandler();

  ngOnInit(): void {
    this.sub.add = this.route.params.subscribe((param) => {
      return this.blog.set(mockblog.find((blog) => blog.id == param['id']));
    });
  }

  ngOnDestroy(): void {
    this.sub.clear();
  }

  openModal() {
    return this.editModal.nativeElement.showModal();
  }
}
