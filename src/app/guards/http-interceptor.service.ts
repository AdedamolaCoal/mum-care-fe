import { inject, Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, finalize } from "rxjs/operators";
import { NotifyService } from "@service/notify.service";
// import { LoaderService } from '../services/loader.service'; activate when loader is available

@Injectable()
export class MumCareHttpInterceptor implements HttpInterceptor {
  // constructor(private loaderSrv: LoaderService) {}

  notifySrv = inject(NotifyService);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loaderSrv.isLoading.next(true);
    // Modify request here if needed
    // For example, you can add headers or change the URL
    const token = localStorage.getItem("userToken");
    const refreshToken = localStorage.getItem("userToken");
    // Clone the request and add authorization header
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `Bearer ${refreshToken}`,
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Expires: "Sat, 01 Jan 2000 00:00:00 GMT",
        "Cache-Control": "no-ca",
        "X-Xsrf-Token": `${token}`,
      },
    });

    return next.handle(authReq).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          // Logging successful responses
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // Handle errors here
        // console.error('Error occurred:', error);
        this.notifySrv.notifyError(`${error.error.message}`);

        // You can also throw a custom error or return a specific observable
        // For example:
        // return throwError('Something bad happened; please try again later.');

        return throwError(error);
      }),
      finalize(() => {
        // Stop loading on completion
        // this.loaderSrv.isLoading.next(false);
      })
    );
  }
}

// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpResponse,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, throwError, BehaviorSubject } from 'rxjs';
// import { catchError, tap, finalize, switchMap, filter, take } from 'rxjs/operators';
// import { LoaderService } from '../services/loader.service';

// @Injectable()
// export class SFAHttpIntercepts implements HttpInterceptor {
//   private tenantIdSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

//   constructor(private loaderSrv: LoaderService) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     this.loaderSrv.isLoading.next(true);
//     // Modify request here if needed
//     // For example, you can add headers or change the URL

//     return this.tenantIdSubject.pipe(
//       filter(tenantId => !!tenantId), // Only proceed if a tenantId is available
//       take(1), // Take the first value emitted
//       switchMap(tenantId => {
//         const authReq = request.clone({
//           setHeaders: {
//             Authorization: `Bearer YourAccessTokenHere`,
//             'Content-Type': 'application/json',
//             Accept: 'application/json, text/plain, */*',
//             'Abp.TenantId': `${tenantId}`, // Use the tenantId obtained from the BehaviorSubject
//             'X-Requested-With': 'XMLHttpRequest',
//             Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
//             'Cache-Control': 'no-ca',
//             'X-Xsrf-Token': `YourXsrfTokenHere`,
//           }
//         });

//         return next.handle(authReq).pipe(
//           tap(event => {
//             if (event instanceof HttpResponse) {
//               // Logging successful responses
//             //   console.log('Response:', event);
//             }
//           }),
//           catchError((error: HttpErrorResponse) => {
//             // Handle errors here
//             console.error('Error occurred:', error);

//             // You can also throw a custom error or return a specific observable
//             // For example:
//             // return throwError('Something bad happened; please try again later.');

//             return throwError(error);
//           }),
//           finalize(() => {
//             // Stop loading on completion
//             this.loaderSrv.isLoading.next(false);
//           })
//         );
//       })
//     );
//   }

//   // Method to update the tenantId value
//   updateTenantId(tenantId: string | null): void {
//     this.tenantIdSubject.next(tenantId);
//   }
// }
