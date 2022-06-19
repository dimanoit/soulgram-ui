import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PageResponseModel } from 'src/app/core/models/page-response.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { PostViewModel } from './models/post-view.model';

@UntilDestroy()
@Component({
  selector: 'soul-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  posts: PostViewModel[] = [];
  constructor(
    private postService: PostsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.postService
      .getPostsByUserId()
      .pipe(untilDestroyed(this))
      .subscribe((response: PageResponseModel<PostViewModel>) => {
        this.posts = response.data;
        this.changeDetectorRef.detectChanges();
      });
  }
}
