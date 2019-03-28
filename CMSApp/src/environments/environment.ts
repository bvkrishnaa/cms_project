// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  devUrl : 'www.google.com',
  CommonUrl: 'http://localhost:59033/api/',
  TokenUrl: 'http://localhost:63582/Token',
  InvoiceURL: 'http://localhost:63582/DevReports/DevReports.aspx?',
  InvoiceContrURL: 'http://localhost:63582/api/',
  InvoicePrint: 'http://localhost:63582/DevReports/ReportDesigner.aspx?'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
