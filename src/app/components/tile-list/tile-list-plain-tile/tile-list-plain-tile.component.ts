import {
  Component,
  input,
  InputSignal,
  OnInit,
  output,
  Signal,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Category } from '../../../models/category.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tile-list-plain-tile',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './tile-list-plain-tile.component.html',
  styleUrl: './tile-list-plain-tile.component.scss',
})
export class TileListPlainTileComponent implements OnInit {
  tileObject = input<Category | undefined>();
  tileName: string = '';
  category: string = '';
  categoryId: number = 0;

  ngOnInit(): void {
    this.tileName = this.tileObject()!.categoryNamePlural;
    this.category = this.tileObject()!.path;
    this.categoryId = this.tileObject()!.id;
  }
}
