import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [InputComponent, BlogCardComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  public readonly route = inject(ActivatedRoute);
  searchBlog = new FormControl('');
}
