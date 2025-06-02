import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../components/buttons/secondary-button/secondary-button.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { NavigationService } from '../../services/navigationService/navigation.service';

@Component({
  selector: 'app-loggedout-home-page',
  imports: [SpacerComponent, PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './loggedout-home-page.component.html',
  styleUrl: './loggedout-home-page.component.scss',
})
export class LoggedoutHomePageComponent {
  private navigationService = inject(NavigationService);

  navigateTo(path: string) {
    this.navigationService.navigate(path);
  }
}
