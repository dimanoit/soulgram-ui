import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SoulInputParams } from 'src/app/core/components/soul-input/soul-input.params.model';
import { PostType } from 'src/app/shared/models/post-type.enum';
import { UploadPostModel } from 'src/app/shared/models/upload-post.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'soul-add-article-dialog',
  templateUrl: './add-article-dialog.component.html',
  styleUrls: ['./add-article-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddArticleDialogComponent {
  uploadPostForm: FormGroup;
  inputParams: SoulInputParams = {
    label: 'Title',
    placeholder: 'You can write something here...',
  } as SoulInputParams;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private localStorage: LocalStorageService
  ) {
    this.uploadPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
      tags: [[]],
    });
  }

  addChipsToForm(chips: string[]): void {
    this.uploadPostForm.patchValue({
      tags: chips,
    });
  }

  addArticleTextToForm(articleText: string): void {
    this.uploadPostForm.patchValue({
      content: articleText,
    });
  }

  publishPost(isDraft: boolean): void {
    const uploadPostModel: UploadPostModel = {
      userId: this.localStorage.getUserId(),
      postType: PostType.Article,
      text: this.uploadPostForm.controls['description'].value,
      hashTags: this.uploadPostForm.controls['tags'].value,
      files: this.uploadPostForm.controls['files'].value,
      isDraft,
    };

    this.postService.uploadPost(uploadPostModel).subscribe((event) => {
      console.log(event);
    });
  }
}
