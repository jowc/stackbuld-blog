import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stackbuld-error',
  template: `<div class="text-red-500 text-sm" [ngClass]="classes">
    {{ message }}
  </div>`,
  standalone: true,
  imports: [NgClass],
})
export class ErrorTextComponent implements OnInit {
  @Input() classes?: string;
  @Input({ required: true }) message?: string;

  constructor() {}

  ngOnInit() {}
}
