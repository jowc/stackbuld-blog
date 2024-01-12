import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ButtonComponent } from '../../../../shared/ui/form/button/button.component';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { addPost } from '../../data-access/store/blog.actions';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
})
export class AddBlogComponent {
  public readonly store = inject(Store<AppState>);

  createPostForm = new FormGroup({
    text: new FormControl(''),
    image: new FormControl(''),
    title: new FormControl(''),
  });

  onSubmit() {
    // this.store.dispatch(addPost(this.createPostForm.value));
  }
}
