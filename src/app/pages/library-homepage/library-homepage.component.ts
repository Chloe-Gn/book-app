import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar/nav-bar.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { PlainTileComponent } from '../../components/tile-list/plain-tile/plain-tile.component';
import { TileLIstComponent } from '../../components/tile-list/tile-list/tile-list.component';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { Category } from '../../models/category.model';
import { MockCategoryService } from '../../services/categoryService/mock-category.service';

@Component({
  selector: 'app-library-homepage',
  imports: [
    TopBarComponent,
    NavBarComponent,
    TileLIstComponent,
    SpacerComponent,
    PlainTileComponent,
  ],
  templateUrl: './library-homepage.component.html',
  styleUrl: './library-homepage.component.scss',
})
export class LibraryHomepageComponent implements OnInit {
  constructor(private mockCategoryService: MockCategoryService) {}
  router = inject(Router);
  title: string = 'bibliothèque';
  tileObjects: Category[] = [];

  ngOnInit(): void {
    this.tileObjects = this.mockCategoryService.getCategories();
  }

  getTileStyle(index: number, tableLength: number): object {
    const patternIndex = index % tableLength;

    switch (patternIndex) {
      case 0:
        return { 'grid-row': 'span 2', 'grid-column': 'span 1' };
      case 6:
        return { 'grid-column': 'span 2' };
      default:
        return {};
    }
  }
}
