import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpacerComponent } from '../../spacer/spacer.component';

@Component({
  selector: 'app-filter-sort-bar-icon',
  imports: [NgStyle],
  templateUrl: './filter-sort-bar-icon.component.html',
  styleUrl: './filter-sort-bar-icon.component.scss',
})
export class FilterSortBarIconComponent {
  label = input('');
  icon = input('');
  gap = input('');
}
