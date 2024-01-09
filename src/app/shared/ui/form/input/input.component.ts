import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from './data-access/input.types';

@Component({
  selector: 'stackbuld-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input({ required: true }) type: InputType = 'text';
  @Input({ required: true }) label!: string;
  @Input() text?: string;
  @Input() class?: string;
  @Input() placeholder?: string;
  @Input() outline = true;
  @Input() showLable = true;
  @Input() showPlacehoder = false;
  @ViewChild('textField', { static: true })
  textField!: ElementRef<HTMLInputElement>;
  visible = true;
  touched = false;
  disabled = false;

  toggleVisibility() {
    if (this.type === 'text') {
      this.type = 'password';
    } else {
      this.type = 'text';
    }
    return (this.visible = !this.visible);
  }

  onType(text: string) {
    this.markAsTouched();
    if (!this.disabled) {
      this.text = text;
      this.onChange(this.text);
    }
  }

  onChange = (text: unknown) => {};

  onTouched = () => {};

  writeValue(text: string) {
    this.text = text;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
