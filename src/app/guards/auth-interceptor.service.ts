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
import { NotifyService } from "../services/notify.service";
// import { LoaderService } from '../services/loader.service';

@Injectable()
export class AuthIntercepts implements HttpInterceptor {
  // constructor(private loaderSrv: LoaderService) {}

  notifySrv = inject(NotifyService);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loaderSrv.isLoading.next(true);
    // Modify request here if needed
    // For example, you can add headers or change the URL
    // const tID = localStorage.getItem("Tenantid")
    // console.log("eeee ", tID);
    // Clone the request and add authorization header
    const authReq = request.clone({
      setHeaders: {
        "Content-Type": "application/json",
        Accept: "text/plain",
        "X-Requested-With": "XMLHttpRequest",
        Expires: "Sat, 01 Jan 2000 00:00:00 GMT",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
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
        console.error("Error occurred:", error);
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
