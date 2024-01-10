import { Component, Input } from '@angular/core';
import { PostPreviewInterface } from '../../../../shared/utils/types/server-response.types';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() data!: PostPreviewInterface | any;
}
