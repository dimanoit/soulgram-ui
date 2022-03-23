import { Injectable } from '@angular/core';
import { LoginResult } from 'src/app/auth/models/login-result.model';

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

  // TODO delete after testing
  setTestToken(): void {
    localStorage.setItem('access_token', 'Test');
  }

  getUserId(): string {
    const userInfoObj = localStorage.getItem('id_token_claims_obj') as string;
    return JSON.parse(userInfoObj).sub;
  }

  //TODO add email_verified check, refresh token ability, roles
}
