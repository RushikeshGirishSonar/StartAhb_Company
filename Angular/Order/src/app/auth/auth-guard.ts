import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from './auth';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  const loggedIn = authService.isLoggedIn();

  if (loggedIn) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
