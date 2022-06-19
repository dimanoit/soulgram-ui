import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SoulInputParams } from 'src/app/core/components/soul-input/soul-input.params.model';
import { UploadArticleModel } from 'src/app/posts/posts/models/upload-article.model';
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
    private readonly formBuilder: FormBuilder,
    private readonly postService: PostsService,
    private readonly localStorage: LocalStorageService
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

  uploadArticle(): void {
    const uploadPostModel: UploadArticleModel = {
      userId: this.localStorage.getUserId(),
      title: this.uploadPostForm.controls['title'].value,
      text: this.uploadPostForm.controls['content'].value,
      hashTags: this.uploadPostForm.controls['tags'].value,
    };

    this.postService.uploadPost(uploadPostModel).subscribe((event) => {
      console.log(event);
    });
  }
}
