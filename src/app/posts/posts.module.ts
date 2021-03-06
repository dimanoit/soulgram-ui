import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CoreModule } from '../core/core.module';
import { CompactAccountInfoComponent } from './compact-account-info/compact-account-info.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { PostComponent } from './posts/post/post.component';
import { StoriesComponent } from './posts/stories/stories.component';
import { StoryComponent } from './posts/stories/story/story.component';
import { AddStoryComponent } from './posts/stories/add-story/add-story.component';
import { UserService } from '../shared/services/user.service';
import { ToDateViewPipe } from '../core/pipes/to-date-view.pipe';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [
    PostsComponent,
    CompactAccountInfoComponent,
    RecommendationsComponent,
    PostComponent,
    StoriesComponent,
    StoryComponent,
    AddStoryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule, MatMenuModule],
  providers: [UserService, ToDateViewPipe],
})
export class PostsModule {}
