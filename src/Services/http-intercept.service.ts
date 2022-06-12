import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { catchError, finalize } from 'rxjs/operators';
import { AppNotificationService } from './app-notification-service/app-notification-service';



@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor {
  constructor(private loaderService: LoaderService, private notificationService: AppNotificationService) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();

    return next.handle(request)
      .pipe(
        finalize(() => this.loaderService.hide()),
      ).pipe(catchError(err => {
        if (err instanceof HttpErrorResponse) {

          console.log('this should print your error!', err);
          const errorMessage = typeof err.error === 'object' ? err.error.error.message : err.error;
          this.notificationService.showError('Error!', errorMessage);

        }
        return new Observable<HttpEvent<any>>();
      }));
  }
}
