import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const unauthorizedGuard = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return true;
  }

  const router = inject(Router);

  router.navigate(['/']);

  return false;
};
