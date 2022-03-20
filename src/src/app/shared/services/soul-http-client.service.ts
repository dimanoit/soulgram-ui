import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUrls } from 'src/environments/environment';
import { HttpRequestOptions } from '../models/http-options.model';
import { ProgressRequestOptions } from '../models/progress-request-options.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class SoulHttpClient {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  private getApiUrl(url: ServerUrls): string {
    return `${url}/api/`;
  }

  post<T>(url: ServerUrls, endPoint: string, params: Object): Observable<T> {
    return this.http.post<T>(
      this.getApiUrl(url) + endPoint,
      params,
      this.getHttpRequestOptions()
    );
  }

  postProgress<T>(url: ServerUrls, endPoint: string, params: Object) {
    const options = this.getProgressHttpOptions();

    return this.http.post<T>(this.getApiUrl(url) + endPoint, params, options);
  }

  get<T>(url: ServerUrls, endPoint: string): Observable<T> {
    return this.http.get<T>(
      this.getApiUrl(url) + endPoint,
      this.getHttpRequestOptions()
    );
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
      options.headers = options.headers.append(
        'Authorization',
        `Bearer ${token}`
      );
    }
  }
}
