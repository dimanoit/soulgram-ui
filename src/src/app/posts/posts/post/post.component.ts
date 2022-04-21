import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { CompactUserInfo } from '../../compact-account-info/compact-user-info.model';
import { PostViewModel } from '../models/post-view.model';

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
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.post?.userId) {
      this.userService
        .getCompactInfoByUserId(this.post.userId)
        .subscribe((user: CompactUserInfo) => {
          this.userCompactInfo = user;
          this.changeDetectorRef.detectChanges();
        });
    }
  }
}
