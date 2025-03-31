import { TestBed } from '@angular/core/testing';
import { MockCategoryService } from './mock-category.service';
import { Category } from '../../models/category.model';

describe('MockCategoryService', () => {
  let service: MockCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all categories', () => {
    const categories: Category[] = service.getCategories();
    expect(categories.length).toBe(10);
    expect(categories[0].categoryName).toBe('nouveautés');
    expect(categories[1].categoryName).toBe('romans');
    expect(categories[9].categoryName).toBe('religions');
  });

  it('should return categories with the correct properties', () => {
    const categories: Category[] = service.getCategories();
    expect(categories[0]).toEqual(
      jasmine.objectContaining({
        id: 1,
        categoryName: 'nouveautés',
        path: 'nouveautes',
      })
    );
  });
});
