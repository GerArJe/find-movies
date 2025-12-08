import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTodaySkeleton } from './featured-today-skeleton';

describe('FeaturedTodaySkeleton', () => {
  let component: FeaturedTodaySkeleton;
  let fixture: ComponentFixture<FeaturedTodaySkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTodaySkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedTodaySkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
