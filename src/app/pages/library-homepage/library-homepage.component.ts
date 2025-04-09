import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/1.nav-bar/nav-bar/nav-bar.component';
import { TopBarComponent } from '../../components/2.top-bar/top-bar/top-bar.component';
import { TileLIstComponent } from '../../components/4.tile-list/tile-list/tile-list.component';
import { TileListPlainTileComponent } from '../../components/4.tile-list/tile-list-plain-tile/tile-list-plain-tile.component';
import { MockCategoryService } from '../../services/categoryService/mock-category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-library-homepage',
  imports: [
    TopBarComponent,
    NavBarComponent,
    TileLIstComponent,
    TileListPlainTileComponent,
  ],
  templateUrl: './library-homepage.component.html',
  styleUrl: './library-homepage.component.scss',
})
export class LibraryHomepageComponent implements OnInit {
  constructor(private mockCategoryService: MockCategoryService) {}
  title: string = 'bibliothèque';
  tileObjects: Category[] = [];

  ngOnInit(): void {
    this.tileObjects = this.mockCategoryService.getCategories();
  }
}
