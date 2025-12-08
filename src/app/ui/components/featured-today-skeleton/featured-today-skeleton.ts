import { Component, signal } from '@angular/core';

import { CardSkeleton } from '../card-skeleton/card-skeleton';

@Component({
  selector: 'app-featured-today-skeleton',
  imports: [CardSkeleton],
  templateUrl: './featured-today-skeleton.html',
})
export class FeaturedTodaySkeleton {
  protected readonly $cards = signal(Array(8));
}
