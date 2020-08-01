// Angular modules
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

// Services
import { AuthService } from './auth.service';

// Commons
import { Common } from './../../commons/common';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate([Common.PATHS.login]);
      return false;
    }
    return true;
  }

  checkAuthOut(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([Common.PATHS.home]);
    }
  }
}
