import { Component, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tile-list-plain-tile',
  imports: [TitleCasePipe],
  templateUrl: './tile-list-plain-tile.component.html',
  styleUrl: './tile-list-plain-tile.component.scss',
})
export class TileListPlainTileComponent {
  tileName = input<string>();
}
