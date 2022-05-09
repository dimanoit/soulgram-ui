import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterestType } from 'src/app/auth/general-interests/interest-type.enum';
import { SoulHttpClient } from './soul-http-client.service';

@Injectable()
export class InterestsService {
  constructor(private httpClient: SoulHttpClient) {}

  getInterests(): Observable<InterestType[]> {
    return this.httpClient.get('interests');
  }
}
