export interface AuthSettings {
  tokenEndpoint: string;
  openIdConnect: boolean;
  requireHttps: boolean;
  tokenStorage: Storage;
  skipIssuerCheck: boolean;
  userInfoEndpoint: string;
  clientId: string;
  scope: string;
  dummyClientSecret: string;
}
