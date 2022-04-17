import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CompactUserInfo } from '../../compact-account-info/compact-user-info.model';
import { PostViewModel } from '../models/post-view.model';

@Component({
  selector: 'soul-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post: PostViewModel = {} as PostViewModel;
  @Input() userCompactInfo: CompactUserInfo = {} as CompactUserInfo;
}
