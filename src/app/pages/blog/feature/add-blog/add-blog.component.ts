import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { ButtonComponent } from '../../../../shared/ui/form/button/button.component';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { addPost } from '../../data-access/store/blogs.actions';
import { PostCreateInterface } from '../../../../shared/utils/types/model';
import { environment } from '../../../../../environments/environment.development';
import { selectBlogAll } from '../../data-access/store/blogs.selector';
import { AsyncPipe, NgIf } from '@angular/common';
import { ErrorTextComponent } from '../../../../shared/ui/form/error-text/error-text.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ErrorTextComponent,
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './add-blog.component.html',
})
export class AddBlogComponent {
  public readonly store = inject(Store<AppState>);
  blogsAll$ = this.store.select(selectBlogAll);

  createPostForm = new FormGroup({
    text: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
      ],
    }),
    image: new FormControl<string>(''),
    tags: new FormControl<string>(''),
  });

  get formText() {
    return this.createPostForm.get('text');
  }

  onSubmit() {
    const payload = {
      ...this.createPostForm.value,
      owner: environment['app-id'],
      tags: [this.createPostForm.value.tags],
    };
    this.store.dispatch(addPost({ post: payload as PostCreateInterface }));
  }
}
