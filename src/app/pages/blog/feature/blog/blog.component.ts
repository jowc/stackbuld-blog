import { Component } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  searchBlog = new FormControl('');
}
