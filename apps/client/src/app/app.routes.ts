import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthSkeleton } from './core/skeletons/auth/auth.skeleton.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthSkeleton,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
];
