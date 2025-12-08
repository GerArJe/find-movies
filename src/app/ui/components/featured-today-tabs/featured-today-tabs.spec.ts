import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTodayTabs } from './featured-today-tabs';

describe('FeaturedTodayTabs', () => {
  let component: FeaturedTodayTabs;
  let fixture: ComponentFixture<FeaturedTodayTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTodayTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedTodayTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
