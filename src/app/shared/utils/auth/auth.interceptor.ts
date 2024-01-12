import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

export const AuthInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const newReq = req.clone({
    headers: req.headers.set('app-id', environment['app-id']),
  });
  return next(newReq);
};
