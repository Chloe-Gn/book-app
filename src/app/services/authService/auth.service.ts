import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.config';
import { Observable, tap } from 'rxjs';

type AuthResponse = {
  token: string;
};

interface AuthPayLoad {
  username: string;
  password: string;
  remember: boolean;
}

const TOKEN_KEY = 'angular-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly apiURL = inject(API_URL);
  token = signal('');

  constructor() {
    this.token.set(localStorage.getItem(TOKEN_KEY) ?? '');
  }

  login({
    username,
    password,
    remember,
  }: AuthPayLoad): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this.apiURL + '/auth/login', {
        username,
        password,
        remember,
      })
      .pipe(
        tap((response) => {
          const token = response.token;
          this.token.set(token);
          if (remember) {
            localStorage.setItem(TOKEN_KEY, token);
          }
        })
      );
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
