import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('token');

    if (token != null) {
      const newRequest = request.clone({ setHeaders: { 'Authorization': token } });
      return next.handle(newRequest);
    } else {
      return next.handle(request.clone());
    }
  }
}
