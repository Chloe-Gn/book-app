import { NgClass, NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  imports: [NgClass, NgStyle, PrimaryButtonComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LogInFormComponent implements OnInit, OnDestroy {
  logInForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      //  forbiddenNameValidator(/bob/i),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  isUserNameActive: boolean = false;
  isPasswordActive: boolean = false;
  isButtonClicked = signal<boolean>(false);

  userNameSubscription: Subscription | undefined;
  passwordSubscription: Subscription | undefined;

  //Later : create a buildErrorMsg Service

  areUserNameAndPasswordMissing: boolean = false;
  errorPassword: 'missing' | 'too short' | null = null;
  errorUserName: 'missing' | 'too short' | null = null;

  ngOnInit() {
    this.userNameSubscription = this.userName?.valueChanges.subscribe(() =>
      this.onChanges()
    );
    this.passwordSubscription = this.password?.valueChanges.subscribe(() =>
      this.onChanges()
    );
  }

  ngOnDestroy() {
    if (this.userNameSubscription) {
      this.userNameSubscription.unsubscribe();
    }
    if (this.passwordSubscription) {
      this.passwordSubscription.unsubscribe();
    }
  }

  onChanges() {
    this.isUserNameActive = !!this.userName?.value;
    this.isPasswordActive = !!this.password?.value;

    console.log('userName Active:', this.isUserNameActive);
    console.log('password Active:', this.isPasswordActive);
  }

  onSubmit() {
    this.isButtonClicked.set(true);

    setTimeout(() => {
      this.isButtonClicked.set(false);
    }, 200);

    //resetting my booleans
    this.areUserNameAndPasswordMissing = false;
    this.errorPassword = null;
    this.errorUserName = null;

    if (
      this.userName?.hasError('required') &&
      this.password?.hasError('required')
    ) {
      this.areUserNameAndPasswordMissing = true;
    } else if (this.userName?.hasError('required')) {
      this.errorUserName = 'missing';
    } else if (this.password?.hasError('required')) {
      this.errorPassword = 'missing';
    } else if (this.userName && this.userName.hasError('minlength')) {
      this.errorUserName = 'too short';
    } else if (this.password && this.password.hasError('minlength')) {
      this.errorPassword = 'too short';
    }
  }

  get userName() {
    return this.logInForm.get('userName');
  }

  get password() {
    return this.logInForm.get('password');
  }
}
