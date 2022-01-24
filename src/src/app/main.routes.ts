import { Routes } from '@angular/router';

export enum RoutesNames {
  Login = 'login',
  Register = 'register',
  ForgotPassword = 'forgot-password',
  Posts = 'posts',
}

export const routes: Routes = [
  {
    path: RoutesNames.Login,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: RoutesNames.Posts,
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
];
