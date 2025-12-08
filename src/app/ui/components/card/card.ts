import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.html',
})
export class Card {
  /* $image = input.required<string>();
  $title = input.required<string>(); */
}
