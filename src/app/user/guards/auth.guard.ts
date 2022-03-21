import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    public constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.verifyAuthentication()
            .pipe(
                tap(
                    isAuthenticated => {
                        if( !isAuthenticated ) {
                            this.router.navigate(['user/login']);
                        }
                    }
                )
            );
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.verifyAuthentication()
            .pipe(
                tap(
                    isAuthenticated => {
                        if( !isAuthenticated ) {
                            this.router.navigate(['user/login']);
                        }
                    }
                )
            );
  }
}
