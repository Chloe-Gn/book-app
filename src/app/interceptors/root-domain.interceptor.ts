import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { devEnvironment } from '../../environments/environment.development';

export function rootDomainInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const rootDomain = devEnvironment.rootDomain;
  let modifiedRequest = req;

  if (!req.url.startsWith('http')) {
    modifiedRequest = req.clone({
      url: rootDomain + req.url,
    });
  }

  return next(modifiedRequest);
}
