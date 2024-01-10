import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgFor } from '@angular/common';
import { mockblog } from '../../data-access/service/mock-api';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    InputComponent,
    BlogCardComponent,
    ReactiveFormsModule,
    RouterLink,
    NgxPaginationModule,
    NgFor,
  ],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  public readonly route = inject(ActivatedRoute);
  blogs = mockblog;
  p: number = 1;
  searchBlog = new FormControl('');
}
