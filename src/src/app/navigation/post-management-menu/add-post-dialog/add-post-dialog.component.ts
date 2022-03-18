import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PostType } from 'src/app/shared/models/post-type.enum';
import { UploadPostModel } from 'src/app/shared/models/upload-post.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@UntilDestroy()
@Component({
  selector: 'soul-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPostDialogComponent {
  uploadPostForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private localStorage: LocalStorageService
  ) {
    this.uploadPostForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  onSave(): void {
    const uploadPostModel: UploadPostModel = {
      userId: this.localStorage.getUserId(),
      postType: PostType.Post,
      text: this.uploadPostForm.controls['description'].value,
      hashTags: [this.uploadPostForm.controls['tags'].value],
    };

    this.postService
      .uploadPost(uploadPostModel)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
