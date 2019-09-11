// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI: "http://localhost:3000/",
  firebaseConfig: {
    apiKey: "AIzaSyBiHhs8w7dYG5u_AqDrv0gRqwcT5UIdIWk",
    authDomain: "joola-angular.firebaseapp.com",
    databaseURL: "https://joola-angular.firebaseio.com",
    projectId: "joola-angular",
    storageBucket: "",
    messagingSenderId: "459158927749",
    appId: "1:459158927749:web:bf7e51ef76a51439162cec"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
