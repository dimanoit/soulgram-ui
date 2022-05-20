import { Routes } from '@angular/router';
import { UiKitSamplesComponent } from './ui-kit-samples/ui-kit-samples.component';

export enum RoutesNames {
  Auth = 'auth',
  MessageCenter = 'chat',
  AddPost = 'posts/add',
  Account = 'account',
  ForgotPassword = 'forgot-password',
  Posts = 'posts',
  GeneralInterests = 'general-interests',
  UiKit = 'ui-kit',
}

export const routes: Routes = [
  {
    path: RoutesNames.UiKit,
    component: UiKitSamplesComponent,
  },
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
