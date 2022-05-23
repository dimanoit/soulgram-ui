import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterestType } from 'src/app/auth/general-interests/interest-type.enum';
import { UserInterestsRequest } from 'src/app/auth/general-interests/user-interests-request.model';
import { LocalStorageService } from './local-storage.service';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class InterestsService {
  constructor(
    private httpClient: SoulHttpClient,
    private localStorage: LocalStorageService
  ) {}

  getInterests(): Observable<InterestType[]> {
    return this.httpClient.get('interests');
  }

  getInterestsForUser(): Observable<InterestType[]> {
    const userId = this.localStorage.getUserId();
    return this.httpClient.get(`interests/${userId}`);
  }

  setInterestsForUser(interests: InterestType[]): Observable<void> {
    const request = {
      interests,
      userId: this.localStorage.getUserId(),
    } as UserInterestsRequest;

    return this.httpClient.post('interests', request);
  }
}
