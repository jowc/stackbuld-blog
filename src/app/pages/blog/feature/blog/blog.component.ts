import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { mockblog } from '../../data-access/service/mock-api';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { getPosts } from '../../data-access/store/blogs.actions';
import {
  selectBlog,
  selectBlogAll,
} from '../../data-access/store/blogs.selector';
import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';
import { SubscriptionHandler } from '../../../../shared/utils/sub-handler/subscription-handler';
import { PostParamsInterface } from '../../data-access/service/post.service';
import { SkeletonLoaderComponent } from '../../../../shared/ui/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    InputComponent,
    BlogCardComponent,
    SkeletonLoaderComponent,
    ReactiveFormsModule,
    RouterLink,
    NgxPaginationModule,
    CommonModule,
  ],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit, OnDestroy, AfterViewInit {
  public readonly store = inject(Store<AppState>);
  public readonly route = inject(ActivatedRoute);
  public readonly router = inject(Router);
  blogsAll$ = this.store.select(selectBlogAll);
  blogs$ = this.store.select(selectBlog);

  sub = new SubscriptionHandler();

  @ViewChild('searchBar', { read: ElementRef, static: true })
  searchBar!: ElementRef<HTMLInputElement>;

  blogs = mockblog;
  p: number = 1;
  searchBlog = new FormControl('');
  blogPost: any;

  ngOnInit(): void {
    this.reactToQueryParams();
  }

  ngAfterViewInit(): void {
    this.getSearchQuery();
  }

  ngOnDestroy(): void {
    this.sub.clear();
  }

  getSearchQuery() {
    this.sub.add = fromEvent(this.searchBar.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(800),
        distinctUntilChanged()
      )
      .subscribe((search) => {
        if (!search) {
          return this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParams: {},
          });
        }
        return this.router.navigate(['.'], {
          relativeTo: this.route,
          queryParams: { search },
        });
      });
  }

  paginatorEvents(page: number) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }

  reactToQueryParams() {
    this.sub.add = this.route.queryParams.subscribe(
      (p: PostParamsInterface) => {
        const params: PostParamsInterface = {
          ...(p.page && { page: p.page }),
          limit: 9,
        };
        this.store.dispatch(getPosts({ params }));
      }
    );
  }
}
