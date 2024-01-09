import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/blog/feature/blog-shell/blog-shell.module').then(
        (m) => m.BlogShellModule
      ),
  },
  {
    path: 'tags',
    loadComponent: () =>
      import('./pages/archive/feature/archive/archive.component').then(
        (m) => m.ArchiveComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/feature/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact/feature/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];
