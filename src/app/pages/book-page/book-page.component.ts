import { Component, input } from '@angular/core';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { TopBarCloseButtonComponent } from '../../components/top-bar/top-bar-close-button/top-bar-close-button.component';
import { TertiaryButtonComponent } from '../../components/buttons/tertiary-button/tertiary-button.component';

@Component({
  selector: 'app-book-page',
  imports: [
    TertiaryButtonComponent,
    TopBarComponent,
    TopBarCloseButtonComponent,
  ],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss',
})
export class BookPageComponent {
  title: string = 'Fiche du livre';
}
