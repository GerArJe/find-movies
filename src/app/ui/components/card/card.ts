import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { Movie } from '../../../domain/models/movie/movie.model';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.html',
})
export class Card {
  $movie = input.required<Movie>();
}
