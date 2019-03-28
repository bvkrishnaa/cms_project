import { AuthService } from './auth.service';
import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req , next) {
    const authService = this.injector.get(AuthService);
    const tokenzedReq = req.clone({
        setHeader: {
          AuthService : `Bearer ${authService.getToken()}`
        }
    });
    return next.handle(tokenzedReq);
  }
}
