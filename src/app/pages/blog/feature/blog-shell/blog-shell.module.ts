import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'add-blog',
    loadComponent: () =>
      import('../add-blog/add-blog.component').then((m) => m.AddBlogComponent),
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
  imports: [RouterModule.forChild(routes)],
})
export class BlogShellModule {}
