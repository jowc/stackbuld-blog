import { Component, Input } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/ui/form/button/button.component';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
})
export class BlogCommentFormComponent {
  commentForm = new FormGroup({
    message: new FormControl('', { validators: Validators.required }),
    post: new FormControl('1'),
    owner: new FormControl(2),
  });

  submit() {
    console.log(this.commentForm.value);
  }
}
