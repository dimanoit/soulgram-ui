import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface ProgressRequestOptions {
  headers?: HttpHeaders;
  observe: 'events';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
