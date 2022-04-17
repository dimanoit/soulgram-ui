import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CompactUserInfo } from 'src/app/posts/compact-account-info/compact-user-info.model';
import { UserService } from 'src/app/shared/services/user.service';

@UntilDestroy()
@Component({
  selector: 'soul-compact-account-info',
  templateUrl: './compact-account-info.component.html',
  styleUrls: ['./compact-account-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactAccountInfoComponent implements OnInit {
  constructor(
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  userInfo: CompactUserInfo = {} as CompactUserInfo;

  ngOnInit(): void {
    this.userService
      .getCompactInfo()
      .pipe(untilDestroyed(this))
      .subscribe((info: CompactUserInfo) => {
        this.userInfo = info;
        this.changeDetectorRef.detectChanges();
      });
  }
}
