import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUrls } from 'src/environments/environment';
import { HttpRequestOptions } from '../models/http-options.model';
import { ProgressRequestOptions } from '../models/progress-request-options.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class SoulHttpClient {
  constructor(private readonly http: HttpClient, private readonly localStorage: LocalStorageService) {}

  private getUrl(endPoint: string): string {
    return `${ServerUrls.Gateway}/${endPoint}`;
  }

  post$<T>(endPoint: string, body: Object): Observable<T> {
    return this.http.post<T>(this.getUrl(endPoint), body, this.getHttpRequestOptions());
  }

  patch$<T>(endPoint: string, body: Object): Observable<T> {
    return this.http.patch<T>(this.getUrl(endPoint), body, this.getHttpRequestOptions());
  }

  delete$<T>(endPoint: string): Observable<T> {
    return this.http.delete<T>(this.getUrl(endPoint), this.getHttpRequestOptions());
  }

  postProgress<T>(endPoint: string, params: Object) {
    const options = this.getProgressHttpOptions();

    return this.http.post<T>(this.getUrl(endPoint), params, options);
  }

  get$<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(this.getUrl(endPoint), this.getHttpRequestOptions());
  }

  private getHttpRequestOptions(): HttpRequestOptions {
    const options = {} as HttpRequestOptions;
    this.addToken(options);
    return options;
  }

  private getProgressHttpOptions(): ProgressRequestOptions {
    const options = {
      reportProgress: true,
      observe: 'events',
    } as ProgressRequestOptions;

    this.addToken(options);

    return options;
  }

  private addToken(options: HttpRequestOptions | ProgressRequestOptions): void {
    const token = this.localStorage.getToken();
    if (token) {
      options.headers = new HttpHeaders();
      options.headers = options.headers.append('Authorization', `Bearer ${token}`);
    }
  }
}
