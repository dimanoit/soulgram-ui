import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutesNames } from '../main.routes';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: RoutesNames.Register,
    component: SignUpComponent,
  },
];

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
})
export class AuthModule {}
