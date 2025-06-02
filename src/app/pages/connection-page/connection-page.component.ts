import { Component, inject, OnInit } from '@angular/core';
import { LinkButtonComponent } from '../../components/buttons/link-button/link-button.component';
import { TopBarBackButtonComponent } from '../../components/top-bar/top-bar-back-button/top-bar-back-button.component';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { LogInFormComponent } from '../../forms/login-form/login-form.component';
import { AuthService } from '../../services/authService/auth.service';
import { NavigationService } from '../../services/navigationService/navigation.service';

@Component({
  selector: 'app-connection-page',
  imports: [
    LinkButtonComponent,
    LogInFormComponent,
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

  navigate(path: string) {
    this.navigationService.navigate(path);
  }

  goBack() {
    this.navigationService.goBack();
  }

  ngOnInit(): void {
    this.previousPage = this.navigationService.getPreviousUrl();
  }
}
