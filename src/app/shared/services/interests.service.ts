import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interests } from 'src/app/auth/general-interests/general-interest.response.model';
import { LocalStorageService } from './local-storage.service';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class InterestsService {
  constructor(
    private httpClient: SoulHttpClient,
    private localStorage: LocalStorageService
  ) {}

  getInterests(): Observable<Interests[]> {
    return this.httpClient.get('interests');
  }

  getInterestsForUser(): Observable<Interests[]> {
    const userId = this.localStorage.getUserId();
    return this.httpClient.get(`interests/${userId}`);
  }

  setInterestsForUser(interestsIds: string[]): Observable<void> {
    const userId = this.localStorage.getUserId();
    return this.httpClient.patch(`interests/users/${userId}`, interestsIds);
  }
}
