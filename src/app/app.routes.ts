import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/feature/blog-shell/blog-shell.module').then(
        (m) => m.BlogShellModule
      ),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/not-found/feature/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
