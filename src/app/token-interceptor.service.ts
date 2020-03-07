import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthServiceService } from './services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private _authSerivce: AuthServiceService) { }

  intercept(req, next) {
    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authSerivce.getToken()}`
      }
    });
    return next.handle(tokenReq);
  }
}
