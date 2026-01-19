// src/app/core/interceptors/api-key.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setParams: { apikey: environment.apiKey }
  });
  return next(authReq);
};
