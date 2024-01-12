import { Component, Input } from '@angular/core';

@Component({
  selector: 'stackbuld-skeleton',
  template: ` <div
    class="w-full h-full bg-gray-100 animate-pulse rounded"
  ></div>`,
  standalone: true,
})
export class SkeletonLoaderComponent {
  @Input() class?: string;
}
