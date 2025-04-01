import { Component, input } from '@angular/core';
import { TileListPlainTileComponent } from '../tile-list-plain-tile/tile-list-plain-tile.component';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-tile-list',
  imports: [TileListPlainTileComponent],
  templateUrl: './tile-list.component.html',
  styleUrl: './tile-list.component.scss',
})
export class TileLIstComponent {
  tileNames = input<string[]>();
  tileObjects = input<Category[]>();
}
