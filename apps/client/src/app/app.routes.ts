import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthSkeleton } from './core/skeletons/auth/auth.skeleton.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
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
];
