import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'stackbuld-button',
  template: `
    @if(!loading){
    <button
      id="stackbuld-button"
      class="bg-secondary disabled:bg-secondary/50 py-2 text-white text-base font-semibold rounded-lg"
      [class]="class"
      [type]="type"
      [disabled]="disabled"
    >
      {{ text }}
    </button>
    }@else {
    <button
      id="stackbuld-button"
      class="bg-secondary disabled:bg-secondary/50 py-2 text-white text-base font-semibold rounded-lg"
      [class]="class"
      [type]="type"
      [disabled]="loading"
    >
      <stackbuld-spinner class="w-6 h-6" />
    </button>
    }
  `,
  styles: `:host {width: 100%}`,
  standalone: true,
  imports: [NgStyle, NgClass, NgIf, SpinnerComponent],
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() class?: string;
  @Input() disabled = false;
  @Input() type?: 'button' | 'submit' = 'button';
  @Input() loading = false;
}
