import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  keys = {
    access_token: 'access_token',
  };

  getToken(): string {
    return localStorage.getItem('access_token') as string;
  }

  //TODO add email_verified check, refresh token ability, roles
}
