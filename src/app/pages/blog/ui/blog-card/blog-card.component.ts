import { Component, Input } from '@angular/core';
import { PostPreviewInterface } from '../../../../shared/utils/types/model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() data!: PostPreviewInterface;
}
