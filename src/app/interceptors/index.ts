import { HttpInterceptorFn } from "@angular/common/http";
import { authInterceptor } from "./auth.interceptor";


export const httpInterceptorProviders: HttpInterceptorFn[] = [
    authInterceptor
  ];