import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthSkeleton } from './core/skeletons/auth/auth.skeleton.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  {
    path: 'auth',
    component: AuthSkeleton,
    children: [{ path: 'login', component: LoginComponent }],
  },
];
