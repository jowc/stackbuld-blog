import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/blog/feature/blog/blog.component').then(
        (m) => m.BlogComponent
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
