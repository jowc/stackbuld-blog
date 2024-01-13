import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BlogCommentFormComponent } from '../../ui/comment-form/comment-form.component';
import { BlogCommentComponent } from '../../ui/comment/comment.component';
import { SubscriptionHandler } from '../../../../shared/utils/sub-handler/subscription-handler';
import { EditBlogFormComponent } from '../../ui/edit-blog-form/edit-blog-form.component';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { Store } from '@ngrx/store';
import { getPost } from './data-access/store/blog.action';
import { postState, selectPostState } from './data-access/store/blog.selector';
import { CommonModule } from '@angular/common';
import { ErrorTextComponent } from '../../../../shared/ui/form/error-text/error-text.component';
import { SkeletonLoaderComponent } from '../../../../shared/ui/skeleton-loader/skeleton-loader.component';
import { deletePost } from '../../data-access/store/blogs.actions';
import { getComments } from './data-access/store/comment.actions';
import { selectCommentState } from './data-access/store/comment.selector';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    FontAwesomeModule,
    BlogCommentFormComponent,
    BlogCommentComponent,
    EditBlogFormComponent,
    SkeletonLoaderComponent,
    ErrorTextComponent,
    CommonModule,
  ],
  templateUrl: './single-blog.component.html',
})
export class SingleBlogComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(Store<AppState>);

  postState$ = this.store.select(selectPostState);
  commentState$ = this.store.select(selectCommentState);

  faPen = signal(faPen);
  faTrash = signal(faTrash);
  faXmark = signal(faXmark);
  blog = signal<any>({});

  @ViewChild('editModal', { static: false })
  editModal!: ElementRef<HTMLDialogElement>;

  sub = new SubscriptionHandler();

  ngOnInit(): void {
    this.sub.add = this.route.params.subscribe((param) => {
      if (param['id']) {
        this.store.dispatch(getPost({ id: param['id'] }));
        return this.store.dispatch(getComments({ id: param['id'] }));
      }
      this.router.navigate(['/404']);
    });
  }

  ngOnDestroy(): void {
    this.sub.clear();
  }

  openModal() {
    return this.editModal.nativeElement.showModal();
  }

  deletePost(id: string) {
    return this.store.dispatch(deletePost({ id }));
  }
}
