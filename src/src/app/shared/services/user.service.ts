import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompactUserInfo } from '../../posts/compact-account-info/compact-user-info.model';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class UserService {
  constructor(private httpClient: SoulHttpClient) {}

  getCompactInfo(): Observable<CompactUserInfo> {
    return this.httpClient.get('user-compact');
  }
}
