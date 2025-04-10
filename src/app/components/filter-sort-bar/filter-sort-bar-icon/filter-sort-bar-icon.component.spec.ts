import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortBarIconComponent } from './filter-sort-bar-icon.component';

describe('FilterSortBarIconComponent', () => {
  let component: FilterSortBarIconComponent;
  let fixture: ComponentFixture<FilterSortBarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSortBarIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSortBarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
