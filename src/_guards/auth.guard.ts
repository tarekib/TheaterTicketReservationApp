import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router) { }
    canActivate()
        : boolean {
        if (this.authService.IsLoggedIn) {
            return true;
        }
        console.log('you shall not pass!!');
        this.router.navigate(['']);
        return false;
    }
}