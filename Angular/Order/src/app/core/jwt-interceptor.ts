// core/jwt-interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  // 🚫 DO NOT attach token to auth endpoints
  if (req.url.includes('/login') || req.url.includes('/register')) {
    return next(req);
  }

  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
