import { Component } from '@angular/core';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../components/buttons/secondary-button/secondary-button.component';

@Component({
  selector: 'app-loggedout-home-page',
  imports: [SpacerComponent, PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './loggedout-home-page.component.html',
  styleUrl: './loggedout-home-page.component.scss',
})
export class LoggedoutHomePageComponent {}
