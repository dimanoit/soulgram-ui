import { AuthSettings } from 'src/app/auth/models/auth-settings';

export enum ServerUrls {
  Identity = 'https://localhost:5002',
}

export const environment = {
  production: true,
  identitySettings: {} as AuthSettings,
};
