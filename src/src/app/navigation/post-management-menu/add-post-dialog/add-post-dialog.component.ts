import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SoulInputParams } from 'src/app/core/components/soul-input/soul-input.params.model';
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
  inputParams: SoulInputParams = {
    label: 'Description',
    placeholder: 'You can write something here...',
  } as SoulInputParams;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private localStorage: LocalStorageService
  ) {
    this.uploadPostForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      tags: [[], [Validators.required]],
      files: [[]],
    });
  }

  addChipsToForm(chips: string[]): void {
    this.uploadPostForm.patchValue({
      tags: chips,
    });
  }

  addUploadedFiles(files: File[]): void {
    this.uploadPostForm.patchValue({
      files: files,
    });
  }

  publishPost(isDraft: boolean): void {
    const uploadPostModel: UploadPostModel = {
      userId: this.localStorage.getUserId(),
      postType: PostType.Post,
      text: this.uploadPostForm.controls['description'].value,
      hashTags: this.uploadPostForm.controls['tags'].value,
      files: this.uploadPostForm.controls['files'].value,
      isDraft,
    };

    // TODO add progress bar on long upload
    this.postService.uploadPost(uploadPostModel).subscribe((event) => {
      console.log(event);
    });
  }
}
