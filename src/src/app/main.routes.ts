import { Routes } from '@angular/router';

export enum RoutesNames {
  Auth = 'auth',
  ForgotPassword = 'forgot-password',
  Posts = 'posts',
}

export const routes: Routes = [
  {
    path: RoutesNames.Auth,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: RoutesNames.Posts,
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
];
