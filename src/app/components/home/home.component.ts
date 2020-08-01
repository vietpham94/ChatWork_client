import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SocialAuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { ApiService } from '../../services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Common } from '../../commons/common';
import { ApiStatus } from '../../commons/enum/api-status.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  user: SocialUser;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
    private authSocialService: SocialAuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getProfile();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  /**
   * Logout
   *
   * @memberof HomeComponent
   */
  public logout() {
    // Call login API
    this.apiService.senPostRequestAuth(Common.API.logout, {})
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        if (data.status === ApiStatus.SUCCESS) {
          if (this.authService.isNotRefresh) {
            this.authSocialService.signOut();
          } else {
            this.authService.removeToken();
            this.router.navigate([Common.PATHS.login]);
          }
        } else {
          console.error(data.status);
        }
      });
  }
}
