import { Routes } from '@angular/router';
import { UiKitSamplesComponent } from './ui-kit-samples/ui-kit-samples.component';

export enum RoutesNames {
  Auth = 'auth',
  MessageCenter = 'chat',
  AddPost = 'posts/add',
  Account = 'account',
  ForgotPassword = 'forgot-password',
  Home = 'home',
  GeneralInterests = 'general-interests',
  MyInterests = 'my-interests',
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
    path: RoutesNames.Home,
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: RoutesNames.Account,
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
];
