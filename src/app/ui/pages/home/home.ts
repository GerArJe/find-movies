import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { MovieStateService } from '../../../state/services/movie-state.service';
import { FeaturedTodayTabs } from '../../components/featured-today-tabs/featured-today-tabs';
import { FeaturedTodaySkeleton } from '../../components/featured-today-skeleton/featured-today-skeleton';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [FeaturedTodayTabs, CommonModule, FeaturedTodaySkeleton, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private _movieState = inject(MovieStateService);

  protected readonly $featuredTodayMovies = toSignal(this._movieState.featuredTodayMovies$, {
    requireSync: true,
  });
  protected readonly $showFeaturedTodayMovies = computed(
    () => this.$featuredTodayMovies().length > 0
  );

  ngOnInit(): void {
    this._movieState.getFeaturedTodayMovies();
  }
}
