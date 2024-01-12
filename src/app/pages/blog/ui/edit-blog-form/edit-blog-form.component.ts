import { Component, Input, OnInit, inject } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/ui/form/button/button.component';
import {
  PostCreateInterface,
  PostPreviewInterface,
} from '../../../../shared/utils/types/model';
import { AppState } from '../../../../shared/data-access/store/app.state';
import { Store } from '@ngrx/store';
import { environment } from '../../../../../environments/environment.development';
import { AsyncPipe } from '@angular/common';
import { ErrorTextComponent } from '../../../../shared/ui/form/error-text/error-text.component';
import { selectBlogState } from '../../data-access/store/blogs.selector';
import { editPost } from '../../feature/single-blog/data-access/store/blog.action';

@Component({
  selector: 'app-edit-blog-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ErrorTextComponent,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './edit-blog-form.component.html',
})
export class EditBlogFormComponent implements OnInit {
  private readonly store = inject(Store<AppState>);
  @Input({ required: true }) data!: PostPreviewInterface;

  blogState$ = this.store.select(selectBlogState);

  editForm = new FormGroup({
    text: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
      ],
    }),
    image: new FormControl(''),
    title: new FormControl(''),
  });

  get formText() {
    return this.editForm.get('text');
  }

  ngOnInit(): void {
    this.updateForm();
  }

  updateForm() {
    return this.editForm.patchValue({
      text: this.data?.text,
      image: this.data?.image,
    });
  }

  submit() {
    const payload = {
      ...this.editForm.value,
      owner: environment['app-id'],
    };
    this.store.dispatch(
      editPost({ id: this.data.id, post: payload as PostCreateInterface })
    );
  }
}
