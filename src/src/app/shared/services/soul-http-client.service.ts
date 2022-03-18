import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUrls } from 'src/environments/environment';
import { HttpRequestOptions } from '../models/http-options.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class SoulHttpClient {
  requestsOptions: HttpRequestOptions;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {
    this.requestsOptions = this.provideTokenIfAuth();
  }

  private getApiUrl(url: ServerUrls): string {
    return `${url}/api/`;
  }

  post<T>(url: ServerUrls, endPoint: string, params: Object): Observable<T> {
    return this.http.post<T>(
      this.getApiUrl(url) + endPoint,
      params,
      this.requestsOptions
    );
  }

  get<T>(url: ServerUrls, endPoint: string): Observable<T> {
    return this.http.get<T>(
      this.getApiUrl(url) + endPoint,
      this.requestsOptions
    );
  }

  private provideTokenIfAuth(): HttpRequestOptions {
    const options = {} as HttpRequestOptions;

    const token = this.localStorage.getToken();
    if (token) {
      options.headers = new HttpHeaders();
      options.headers = options.headers.append(
        'Authorization',
        `Bearer ${token}`
      );
    }

    return options;
  }
}
