import { NgStyle, TitleCasePipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Category } from '../../../models/category.model';
import { NavigationService } from '../../../services/navigationService/navigation.service';

@Component({
  selector: 'app-plain-tile',
  imports: [NgStyle, TitleCasePipe],
  templateUrl: './plain-tile.component.html',
  styleUrl: './plain-tile.component.scss',
  host: {
    '[style]': 'computedStyleObject',
  },
})
export class PlainTileComponent implements OnInit {
  tileObject = input<Category | undefined>();
  tileName: string = '';
  category: string = '';
  categoryId: number = 0;
  styleObject = input<object>();

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

  get computedStyleObject() {
    return this.styleObject();
  }
}
