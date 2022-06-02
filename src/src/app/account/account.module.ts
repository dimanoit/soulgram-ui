import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInterestsComponent } from './my-interests/my-interests.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: MyInterestsComponent,
  },
];

@NgModule({
  declarations: [MyInterestsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
})
export class AccountModule {}
