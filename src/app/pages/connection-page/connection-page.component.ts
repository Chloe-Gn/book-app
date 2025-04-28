import { Component, inject, OnInit } from '@angular/core';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { TopBarBackButtonComponent } from '../../components/top-bar/top-bar-back-button/top-bar-back-button.component';
import { LinkButtonComponent } from '../../components/buttons/link-button/link-button.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { NavigationService } from '../../services/navigationService/navigation.service';
import { AuthService } from '../../services/authService/auth.service';
import { LogInFormComponent } from '../../forms/login-form/login-form.component';

@Component({
  selector: 'app-connection-page',
  imports: [
    LinkButtonComponent,
    LogInFormComponent,
    SpacerComponent,
    TopBarBackButtonComponent,
    TopBarComponent,
  ],
  templateUrl: './connection-page.component.html',
  styleUrl: './connection-page.component.scss',
})
export class ConnectionPageComponent implements OnInit {
  private authService: AuthService = inject(AuthService);
  private navigationService = inject(NavigationService);
  previousPage: string | null = null;

  goBack() {
    this.navigationService.goBack();
  }

  ngOnInit(): void {
    this.previousPage = this.navigationService.getPreviousUrl();
  }
}
