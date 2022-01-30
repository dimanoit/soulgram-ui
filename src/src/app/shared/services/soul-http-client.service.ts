import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUrls } from 'src/environments/environment';

@Injectable()
export class SoulHttpClient {
  constructor(protected http: HttpClient) {}

  private getApiUrl(url: ServerUrls): string {
    return `${url}/api/`;
  }

  post<T>(
    url: ServerUrls = ServerUrls.Identity,
    endPoint: string,
    params: Object
  ): Observable<T> {
    return this.http.post<T>(this.getApiUrl(url) + endPoint, params);
  }

  get<T>(url: ServerUrls, endPoint: string): Observable<T> {
    return this.http.get<T>(this.getApiUrl(url) + endPoint);
  }
}
