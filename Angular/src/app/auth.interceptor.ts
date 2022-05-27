import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { CheckAuthService } from './check-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authserv:CheckAuthService,public data:LoginComponent) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
      },
    });

    return next.handle(request);
  }
}
