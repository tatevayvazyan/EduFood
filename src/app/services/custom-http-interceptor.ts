import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem('token');
    let reqWithAuth: any;

    if (token) {
      reqWithAuth = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token,
        }
      });
    } else {
      reqWithAuth = req.clone();
    }

    return next.handle(reqWithAuth)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      )
  }
}
