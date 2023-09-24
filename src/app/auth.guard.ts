//ng generate guard auth | CanActivate
import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree }from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
  
export const authGuard: CanActivateFn =(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  
    const router: Router = inject(Router);
    const authService: AuthService = inject (AuthService);
    let url: string = state.url;
    if(authService.isLoggedIn){
      return true;
    } else {
      authService.redirectUrl = url;
      router.navigate(['/login']);
      return false;
    }
}