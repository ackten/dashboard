// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  callbackURL: 'http://localhost:4200/oauth2/callback',
  domain: 'ackten.auth0.com',
  clientId: 'tBMOvxHWmiVbUlH5Ql40jT2pKxv7KYP5',
  audience: 'https://api.ackten.com/',
  logoutURL: 'http://localhost:4200',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
