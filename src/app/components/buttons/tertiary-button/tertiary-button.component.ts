import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../models/book.model';
import { Category } from '../../../models/category.model';
import { NavigationService } from '../../../services/navigationService/navigation.service';

@Component({
  selector: 'app-tertiary-button',
  imports: [RouterLink],
  templateUrl: './tertiary-button.component.html',
  styleUrl: './tertiary-button.component.scss',
})
export class TertiaryButtonComponent {
  object = input<Category | Book>();

  objectId: number = 0;
  pageTitle: string = '';
  pagePath: string = '';

  private navigationService = inject(NavigationService);

  navigateTo(path: string, extras?: any) {
    this.navigationService.navigate(path, extras);
  }

  ngOnInit(): void {
    const currentObject = this.object();

    if (this.isBook(currentObject)) {
      this.objectId = currentObject.id;
      this.pageTitle = 'Fiche du livre';
      this.pagePath = currentObject.bookPagePath;
    }
  }

  private isBook(obj: any): obj is Book {
    return (
      obj &&
      typeof obj === 'object' &&
      'id' in obj &&
      'bookPagePath' in obj &&
      'bookImagePath' in obj &&
      'title' in obj &&
      'authorID' in obj &&
      'authorName' in obj &&
      'firstPublished' in obj &&
      'averageRating' in obj &&
      'categories' in obj &&
      typeof obj.id === 'number' &&
      typeof obj.bookPagePath === 'string' &&
      typeof obj.bookImagePath === 'string' &&
      typeof obj.title === 'string' &&
      typeof obj.authorID === 'number' &&
      typeof obj.authorName === 'string' &&
      obj.firstPublished instanceof Date &&
      typeof obj.averageRating === 'number' &&
      Array.isArray(obj.categories)
    );
  }
}
