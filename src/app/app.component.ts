import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MockCategoryService } from './services/categoryService/mock-category.service';
import { EditorialSelectionComponent } from './pages/editorial-selection/editorial-selection.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `<router-outlet />`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book_app';

  constructor(
    private mockCategoryService: MockCategoryService,
    private router: Router
  ) {}
}
