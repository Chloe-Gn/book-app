import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MockCategoryService } from './services/categoryService/mock-category.service';
import { EditorialSelectionComponent } from './pages/editorial-selection/editorial-selection.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'book_app';

  constructor(
    private mockCategoryService: MockCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const dynamicRoutes = this.mockCategoryService
      .getCategories()
      .map((category) => ({
        path: category.path,
        component: EditorialSelectionComponent,
        data: { category: category },
      }));
    this.router.resetConfig([...this.router.config, ...dynamicRoutes]);
  }
}
