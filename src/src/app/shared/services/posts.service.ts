import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponseModel } from 'src/app/core/models/page-response.model';
import { PostViewModel } from 'src/app/posts/posts/models/post-view.model';
import { UploadPostModel } from '../../posts/posts/models/upload-post.model';
import { LocalStorageService } from './local-storage.service';
import { SoulHttpClient } from './soul-http-client.service';
import { ToolsService } from './tools.service';

@Injectable()
export class PostsService {
  constructor(
    private httpClient: SoulHttpClient,
    private tools: ToolsService,
    private localStorage: LocalStorageService
  ) {}

  uploadPost(post: UploadPostModel) {
    const formData = this.tools.classToFormData(post);

    return this.httpClient.postProgress('posts', formData);
  }

  getPostsByUserId(): Observable<PageResponseModel<PostViewModel>> {
    const userId = this.localStorage.getUserId();
    return this.httpClient.get(`posts/user/${userId}`);
  }
}
