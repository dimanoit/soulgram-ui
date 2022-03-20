import { Injectable } from '@angular/core';
import { ServerUrls } from 'src/environments/environment';
import { UploadPostModel } from '../models/upload-post.model';
import { SoulHttpClient } from './soul-http-client.service';
import { ToolsService } from './tools.service';

@Injectable()
export class PostsService {
  constructor(
    private httpClient: SoulHttpClient,
    private tools: ToolsService
  ) {}

  uploadPost(post: UploadPostModel) {
    const formData = this.tools.classToFormData(post);

    return this.httpClient.postProgress(ServerUrls.Post, 'posts', formData);
  }
}
