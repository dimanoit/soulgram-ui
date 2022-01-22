import { Routes } from '@angular/router';

export enum RoutesNames {
  Login = 'login',
  Register = 'register',
}

export const routes: Routes = [
  {
    path: RoutesNames.Login,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];
