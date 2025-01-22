import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { NotifyService } from "@service/notify.service";
// import { ErrorModalComponent } from '../components/error-modal/success-modal.component';
// import { LoaderService } from '../services/loader.service';
// import { LoaderService } from '../services/loader.service';
// import { NotifyService } from '../notify.service';
// import { BackgroundService } from '../services/background.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(
    // private modalService: NgbModal,
    private router: Router,
    private notifySrv: NotifyService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Log the error or handle it as per your requirement
        // this.loaderSrv.isLoading.next(false);
        if (error.status == 401) {
          this.notifySrv.notifyError(
            `${error.error.error.message}`,
            "Authentication Error!"
          );
          // this.backgroundSrv.stopBackgroundTask();
          this.router.navigate(["/login"]);
        } else {
          this.notifySrv.notifyError(
            `${error.error.error.message}`,
            "An Error Occurred!"
          );
        }
        // Pass the error to the next handler
        return throwError(error);
      })
    );
  }
}
