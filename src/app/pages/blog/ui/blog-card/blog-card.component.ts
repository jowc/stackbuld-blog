import { Component, Input } from '@angular/core';
import { PostPreviewInterface } from '../../../../shared/utils/types/model';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe, NgFor],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() data!: PostPreviewInterface;
}
