import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/ui/form/button/button.component';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
})
export class AddBlogComponent {
  createPostForm = new FormGroup({
    text: new FormControl(''),
    image: new FormControl(''),
    title: new FormControl(''),
  });
}
