import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'stackbuld-spinner',
  template: `
    <div class="lds-ring w-20 h-20" [class]="class">
      <div class="border-white"></div>
      <div class="border-white"></div>
      <div class="border-white"></div>
      <div class="border-white"></div>
    </div>
  `,
  styles: `
  .lds-ring {
    display: inline-block;
    position: relative;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 70%;
    height: 70%;
    margin: 8px;
    border: 3px solid;
    border-radius: 50%;
    animation: lds-ring 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.2s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `,
  standalone: true,
  imports: [NgStyle, NgClass, NgIf],
})
export class SpinnerComponent {
  @Input() class?: string;
}
