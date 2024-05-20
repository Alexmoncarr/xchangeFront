import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Attempt to retrieve the JWT from storage
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            // Clone the request to include the authorization header.
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${jwt}` }
            });
        }
        return next.handle(request);
    }
}