import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      req =  req.clone({
        setHeaders:{
          'x-rapidapi-key': 'd30dc025eemshde25e8496ce57a6p1d9cc8jsnee360c671cca',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        },
        setParams: {
          key:'2617afdec0a946ba90aef93c17eda96a'
        }
      });
      return next.handle(req);
  }
}
