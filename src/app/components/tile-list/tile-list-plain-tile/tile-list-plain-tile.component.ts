import {
  Component,
  inject,
  input,
  InputSignal,
  OnInit,
  output,
  Signal,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Category } from '../../../models/category.model';
import { Router, RouterLink } from '@angular/router';
import { NavigationService } from '../../../services/navigationService/navigation.service';

@Component({
  selector: 'app-tile-list-plain-tile',
  imports: [TitleCasePipe],
  templateUrl: './tile-list-plain-tile.component.html',
  styleUrl: './tile-list-plain-tile.component.scss',
})
export class TileListPlainTileComponent implements OnInit {
  tileObject = input<Category | undefined>();
  tileName: string = '';
  category: string = '';
  categoryId: number = 0;

  private navigationService = inject(NavigationService);

  navigateTo() {
    this.navigationService.navigate(this.category, {
      state: {
        title: this.tileName,
        id: this.categoryId,
      },
    });
  }

  ngOnInit(): void {
    this.tileName = this.tileObject()!.categoryNamePlural;
    this.category = this.tileObject()!.path;
    this.categoryId = this.tileObject()!.id;
  }
}
