import { Component, OnInit, inject } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { mockblog } from '../../data-access/service/mock-api';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { getPosts } from '../../data-access/store/blog.actions';
import {
  selectBlog,
  selectBlogAll,
} from '../../data-access/store/blog.selector';
import { tap } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    InputComponent,
    BlogCardComponent,
    ReactiveFormsModule,
    RouterLink,
    NgxPaginationModule,
    CommonModule,
  ],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  public readonly route = inject(ActivatedRoute);
  public readonly store = inject(Store<AppState>);
  blogsAll$ = this.store.select(selectBlogAll);
  blogs$ = this.store.select(selectBlog);

  blogs = mockblog;
  p: number = 1;
  searchBlog = new FormControl('');
  blogPost: any;

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }
}
