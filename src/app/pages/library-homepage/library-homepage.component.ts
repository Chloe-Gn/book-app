import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar/nav-bar.component';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { TileLIstComponent } from '../../components/tile-list/tile-list/tile-list.component';
import { TileListPlainTileComponent } from '../../components/tile-list/tile-list-plain-tile/tile-list-plain-tile.component';
import { MockCategoryService } from '../../services/categoryService/mock-category.service';
import { Category } from '../../models/category.model';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-homepage',
  imports: [
    TopBarComponent,
    NavBarComponent,
    TileLIstComponent,
    TileListPlainTileComponent,
    SpacerComponent,
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
}
