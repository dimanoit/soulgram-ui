import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UserService } from 'src/app/shared/services/user.service';
import { CompactUserInfo } from '../../compact-account-info/compact-user-info.model';
import { PostViewModel } from '../models/post-view.model';

@UntilDestroy()
@Component({
  selector: 'soul-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  @Input() post: PostViewModel = {} as PostViewModel;
  userCompactInfo: CompactUserInfo = {} as CompactUserInfo;

  constructor(
    private userService: UserService,
    private postService: PostsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  deletePost(postId: string): void {
    this.postService
      .deletePost(postId)
      .pipe(untilDestroyed(this))
      .subscribe(() => alert('Deleted'));
  }

  makeDraft(postId: string) {}

  private loadUserInfo(): void {
    if (this.post?.userId) {
      this.userService
        .getCompactInfoByUserId(this.post.userId)
        .pipe(untilDestroyed(this))
        .subscribe((user: CompactUserInfo) => {
          this.userCompactInfo = user;
          this.changeDetectorRef.detectChanges();
        });
    }
  }
}
