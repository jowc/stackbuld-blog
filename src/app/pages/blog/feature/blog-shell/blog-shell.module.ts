import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BlogsReducer } from '../../data-access/store/blog.reducers';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../single-blog/single-blog.component').then(
        (m) => m.SingleBlogComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // StoreModule.forFeature('blogs', BlogsReducer),
  ],
})
export class BlogShellModule {}
