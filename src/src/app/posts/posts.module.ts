import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
})
export class PostsModule {}
