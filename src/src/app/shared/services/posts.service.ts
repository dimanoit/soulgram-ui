import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUrls } from 'src/environments/environment';
import { UploadPostModel } from '../models/upload-post.model';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class PostsService {
  constructor(private httpClient: SoulHttpClient) {}

  uploadPost(post: UploadPostModel): Observable<string> {
    return this.httpClient.post(ServerUrls.Post, 'posts', post);
  }
}
