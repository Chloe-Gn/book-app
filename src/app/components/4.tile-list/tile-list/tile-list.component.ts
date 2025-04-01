import { Component, input } from '@angular/core';
import { TileListPlainTileComponent } from '../tile-list-plain-tile/tile-list-plain-tile.component';
import { Category } from '../../../models/category.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tile-list',
  imports: [TileListPlainTileComponent, RouterLink],
  templateUrl: './tile-list.component.html',
  styleUrl: './tile-list.component.scss',
})
export class TileLIstComponent {
  tileNames = input<string[]>();
  tileObjects = input<Category[]>();
}
