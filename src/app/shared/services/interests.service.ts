import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AggregatedInterests } from 'src/app/account/my-interests/aggregated-interests.model';
import { Interests } from 'src/app/auth/general-interests/general-interest.response.model';
import { LocalStorageService } from './local-storage.service';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class InterestsService {
  constructor(private readonly httpClient: SoulHttpClient, private readonly localStorage: LocalStorageService) {}

  getInterests$(): Observable<Interests[]> {
    return this.httpClient.get$('interests');
  }

  getAggregatedInterestsForUser$(): Observable<AggregatedInterests[]> {
    const userId = this.localStorage.getUserId();
    return this.httpClient.get$(`interests/${userId}`);
  }

  setInterestsForUser$(interestsIds: string[]): Observable<void> {
    const userId = this.localStorage.getUserId();
    return this.httpClient.patch$(`interests/users/${userId}`, interestsIds);
  }
}
