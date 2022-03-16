import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CoreModule } from '../core/core.module';
import { CompactAccountInfoComponent } from './compact-account-info/compact-account-info.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { PostComponent } from './posts/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [PostsComponent, CompactAccountInfoComponent, RecommendationsComponent, PostComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
})
export class PostsModule {}
