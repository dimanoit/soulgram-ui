// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthSettings } from 'src/app/auth/models/auth-settings';

export enum SiteUrls {
  Identity = 'https://localhost:5002',
}

const devAuthSettings: AuthSettings = {
  clientId: 'soulgram_ui',
  tokenEndpoint: `${SiteUrls.Identity}/connect/token`,
  userInfoEndpoint: `${SiteUrls.Identity}/connect/userinfo`,
  openIdConnect: false,
  requireHttps: false,
  tokenStorage: localStorage,
  scope: 'openid email offline_access',
  skipIssuerCheck: true,
  dummyClientSecret: '%O$^xZ7Cnm9nb5qmhr$Bgj1',
};

export const environment = {
  production: false,
  identitySettings: devAuthSettings,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
