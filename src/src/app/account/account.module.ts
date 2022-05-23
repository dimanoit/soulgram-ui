import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInterestsComponent } from './my-interests/my-interests.component';
import { RouterModule, Routes } from '@angular/router';
import { MoviesWidgetComponent } from './my-interests/movies-widget/movies-widget.component';

const routes: Routes = [
  {
    path: '',
    component: MyInterestsComponent,
  },
];

@NgModule({
  declarations: [MyInterestsComponent, MoviesWidgetComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountModule {}
