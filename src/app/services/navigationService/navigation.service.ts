import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router) {
    const storedHistory = sessionStorage.getItem('navigationHistory');
    if (storedHistory) {
      this.history = JSON.parse(storedHistory);
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        sessionStorage.setItem(
          'navigationHistory',
          JSON.stringify(this.history)
        );
      });
  }

  navigate(path: string, extras: any = {}) {
    const currentUrl = this.router.url;
    this.history.push(currentUrl);
    this.router.navigate([path], {
      state: {
        from: currentUrl,
        ...extras.state,
      },
      ...extras,
    });
  }

  getPreviousUrl(): string | null {
    return this.history.length > 0
      ? this.history[this.history.length - 1]
      : null;
  }

  goBack() {
    const previousUrl = this.history.pop();
    if (previousUrl) {
      this.router.navigateByUrl(previousUrl);
    }

    sessionStorage.setItem('navigationHistory', JSON.stringify(this.history));
  }
}
