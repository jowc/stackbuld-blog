import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/ui/form/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/ui/form/button/button.component';
import { PostPreviewInterface } from '../../../../shared/utils/types/server-response.types';

@Component({
  selector: 'app-edit-blog-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './edit-blog-form.component.html',
})
export class EditBlogFormComponent implements OnInit {
  @Input({ required: true }) data!: any;

  editForm = new FormGroup({
    text: new FormControl(''),
    image: new FormControl(''),
    title: new FormControl(''),
  });

  ngOnInit(): void {
    this.updateForm();
  }

  updateForm() {
    return this.editForm.patchValue({
      text: this.data?.title,
      image: this.data?.image,
      title: this.data?.body,
    });
  }

  submit() {
    console.log(this.editForm.value);
  }
}
