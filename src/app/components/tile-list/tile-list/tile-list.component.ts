import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { Book } from '../../../models/book.model';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-tile-list',
  imports: [NgStyle],
  templateUrl: './tile-list.component.html',
  styleUrl: './tile-list.component.scss',
  host: {
    '[style.marginTop]': 'computedMarginTop',
    '[style.rowGap]': 'computedRowGap',
    '[style.padding]': 'computedPadding',
  },
})
export class TileLIstComponent {
  tileObjects = input<Category[] | Book[]>();
  marginTop = input<string>();
  rowGap = input<string>();
  padding = input<string>();

  get computedPadding() {
    return this.padding();
  }

  get computedMarginTop() {
    return this.marginTop();
  }

  get computedRowGap() {
    return this.rowGap();
  }
}
