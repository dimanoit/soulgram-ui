import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUrls } from 'src/environments/environment';
import { CompactUserInfo } from '../models/compact-user-info.model';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class UserService {
  constructor(private httpClient: SoulHttpClient) {}

  getCompactInfo(): Observable<CompactUserInfo> {
    return this.httpClient.get(ServerUrls.Identity, 'account/compact');
  }
}
