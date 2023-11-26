import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = (): boolean => {
  const token = localStorage.getItem('token');
  const router = inject(Router);

  if (token) {
    return true;
  }

  router.navigate(['/auth/login']);
  return true;
};
