import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompactUserInfo } from '../../posts/compact-account-info/compact-user-info.model';
import { LocalStorageService } from './local-storage.service';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class UserService {
  constructor(private readonly httpClient: SoulHttpClient, private readonly localStorage: LocalStorageService) {}

  getCompactInfo$(): Observable<CompactUserInfo> {
    const userId = this.localStorage.getUserId();
    return this.httpClient.get$(`user-compact/${userId}`);
  }

  getCompactInfoByUserId$(userId: string): Observable<CompactUserInfo> {
    return this.httpClient.get$(`user-compact/${userId}`);
  }
}
