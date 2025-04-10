import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortBarDynamicTextComponent } from './filter-sort-bar-dynamic-text.component';

describe('FilterSortBarDynamicTextComponent', () => {
  let component: FilterSortBarDynamicTextComponent;
  let fixture: ComponentFixture<FilterSortBarDynamicTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSortBarDynamicTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSortBarDynamicTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
