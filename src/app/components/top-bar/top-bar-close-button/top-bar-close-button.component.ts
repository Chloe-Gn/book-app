import { Component, inject } from '@angular/core';
import { ICON_CLOSE_CROSS } from '../../../../assets/icons/svg-paths/svg-paths';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../../../services/navigationService/navigation.service';

@Component({
  selector: 'app-top-bar-close-button',
  imports: [],
  templateUrl: './top-bar-close-button.component.html',
  styleUrl: './top-bar-close-button.component.scss',
})
export class TopBarCloseButtonComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  private navigationService = inject(NavigationService);

  goBack() {}

  icon: string = ICON_CLOSE_CROSS;
}
