import { AuthService } from './../services/auth.service';
import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";



export function authInterceptor(
req: HttpRequest<any>,
 next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
        const authService = inject(AuthService);
        const headers= new HttpHeaders()
        .append('Authorization', `Bearer ${authService.getToken()}`);
        const modifiedReq = req.clone({ headers });
        return next(modifiedReq);
    }
