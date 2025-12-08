import { Component, signal } from '@angular/core';

import { FeaturedSelected } from '../../shared/models/types';

@Component({
  selector: 'app-featured-today-tabs',
  imports: [],
  templateUrl: './featured-today-tabs.html',
})
export class FeaturedTodayTabs {
  protected readonly $featuredSelected = signal<FeaturedSelected>('movies');

  onChangeFeaturedSelected(value: FeaturedSelected) {
    this.$featuredSelected.set(value);
  }
}
