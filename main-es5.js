function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chatwork';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth/auth-guard.service */
    "./src/app/services/auth/auth-guard.service.ts");
    /* harmony import */


    var _services_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth/role-guard.service */
    "./src/app/services/auth/role-guard.service.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/api/api.service */
    "./src/app/services/api/api.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _components_home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/home/home.module */
    "./src/app/components/home/home.module.ts");
    /* harmony import */


    var _components_profile_profile_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/profile/profile.module */
    "./src/app/components/profile/profile.module.ts");
    /* harmony import */


    var _components_register_register_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/register/register.module */
    "./src/app/components/register/register.module.ts");
    /* harmony import */


    var _components_login_login_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/login/login.module */
    "./src/app/components/login/login.module.ts");
    /* harmony import */


    var _components_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/reset-password/reset-password.module */
    "./src/app/components/reset-password/reset-password.module.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_8__["RoleGuardService"], {
        provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JWT_OPTIONS"],
        useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JWT_OPTIONS"]
      }, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _services_api_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [{
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["FacebookLoginProvider"]('2965647346823367')
          }, {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"]('159957289052-k9qaa2dp92avv931ae5vuo9va7upfelp.apps.googleusercontent.com')
          }]
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["ROUTES"]), _components_home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _components_login_login_module__WEBPACK_IMPORTED_MODULE_15__["LoginModule"], _components_register_register_module__WEBPACK_IMPORTED_MODULE_14__["RegisterModule"], _components_profile_profile_module__WEBPACK_IMPORTED_MODULE_13__["ProfileModule"], _components_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["SocialLoginModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _components_login_login_module__WEBPACK_IMPORTED_MODULE_15__["LoginModule"], _components_register_register_module__WEBPACK_IMPORTED_MODULE_14__["RegisterModule"], _components_profile_profile_module__WEBPACK_IMPORTED_MODULE_13__["ProfileModule"], _components_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["SocialLoginModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["ROUTES"]), _components_home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _components_login_login_module__WEBPACK_IMPORTED_MODULE_15__["LoginModule"], _components_register_register_module__WEBPACK_IMPORTED_MODULE_14__["RegisterModule"], _components_profile_profile_module__WEBPACK_IMPORTED_MODULE_13__["ProfileModule"], _components_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["SocialLoginModule"]],
          providers: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_8__["RoleGuardService"], {
            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JWT_OPTIONS"],
            useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JWT_OPTIONS"]
          }, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _services_api_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [{
                id: angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["FacebookLoginProvider"].PROVIDER_ID,
                provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["FacebookLoginProvider"]('2965647346823367')
              }, {
                id: angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"].PROVIDER_ID,
                provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"]('159957289052-k9qaa2dp92avv931ae5vuo9va7upfelp.apps.googleusercontent.com')
              }]
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: ROUTES */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony import */


    var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/auth/auth-guard.service */
    "./src/app/services/auth/auth-guard.service.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/reset-password/reset-password.component */
    "./src/app/components/reset-password/reset-password.component.ts");
    /* harmony import */


    var _commons_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./commons/common */
    "./src/app/commons/common.ts"); // Services
    // Components
    // Commons


    var ROUTES = [{
      path: _commons_common__WEBPACK_IMPORTED_MODULE_6__["Common"].PATHS.login,
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: _commons_common__WEBPACK_IMPORTED_MODULE_6__["Common"].PATHS.register,
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: _commons_common__WEBPACK_IMPORTED_MODULE_6__["Common"].PATHS.home,
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }, {
      path: _commons_common__WEBPACK_IMPORTED_MODULE_6__["Common"].PATHS.profile,
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
      canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }, {
      path: _commons_common__WEBPACK_IMPORTED_MODULE_6__["Common"].PATHS.resetPassword,
      component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]
    }, {
      path: '**',
      redirectTo: _commons_common__WEBPACK_IMPORTED_MODULE_6__["Common"].PATHS.home
    }];
    /***/
  },

  /***/
  "./src/app/commons/common.ts":
  /*!***********************************!*\
    !*** ./src/app/commons/common.ts ***!
    \***********************************/

  /*! exports provided: Common */

  /***/
  function srcAppCommonsCommonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Common", function () {
      return Common;
    });

    var Common = function Common() {
      _classCallCheck(this, Common);
    };

    Common.PATHS = {
      home: '',
      profile: 'profile',
      login: 'login',
      register: 'register',
      resetPassword: 'reset-password'
    };
    Common.KEYS = {
      token: 'token',
      email: 'email',
      password: 'password',
      confirm: 'confirm',
      profile: 'profile'
    };
    Common.API = {
      login: '/api/login',
      signup: '/api/signup',
      userList: '/api/user',
      facebookLogin: '/api/social-signin/facebook',
      googleLogin: '/api/social-signin/google',
      logout: '/api/logout'
    };
    /***/
  },

  /***/
  "./src/app/commons/enum/api-status.enum.ts":
  /*!*************************************************!*\
    !*** ./src/app/commons/enum/api-status.enum.ts ***!
    \*************************************************/

  /*! exports provided: ApiStatus */

  /***/
  function srcAppCommonsEnumApiStatusEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiStatus", function () {
      return ApiStatus;
    });

    var ApiStatus;

    (function (ApiStatus) {
      ApiStatus[ApiStatus["SUCCESS"] = 200] = "SUCCESS";
      ApiStatus[ApiStatus["ERROR"] = 500] = "ERROR";
      ApiStatus[ApiStatus["AUTH_FAIL"] = 401] = "AUTH_FAIL";
    })(ApiStatus || (ApiStatus = {}));
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _commons_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../commons/common */
    "./src/app/commons/common.ts");
    /* harmony import */


    var _commons_enum_api_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../commons/enum/api-status.enum */
    "./src/app/commons/enum/api-status.enum.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/api/api.service */
    "./src/app/services/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(apiService, router, authService, authSocialService) {
        _classCallCheck(this, HomeComponent);

        this.apiService = apiService;
        this.router = router;
        this.authService = authService;
        this.authSocialService = authSocialService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.getProfile();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true); // Unsubscribe from the subject

          this.destroy$.unsubscribe();
        }
        /**
         * Logout
         *
         * @memberof HomeComponent
         */

      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          // Call login API
          this.apiService.senPostRequestAuth(_commons_common__WEBPACK_IMPORTED_MODULE_3__["Common"].API.logout, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            if (data.status === _commons_enum_api_status_enum__WEBPACK_IMPORTED_MODULE_4__["ApiStatus"].SUCCESS) {
              if (_this.authService.isNotRefresh) {
                _this.authSocialService.signOut();
              } else {
                _this.authService.removeToken();

                _this.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_3__["Common"].PATHS.login]);
              }
            } else {
              console.error(data.status);
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["SocialAuthService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 35,
      vars: 2,
      consts: [[1, "main-header"], [1, "navbar", "navbar-expand-lg", "navbar-light", "w-100"], ["id", "logo"], ["href", "#"], ["src", "../../../assets/images/logo_hz.png", "alt", "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link", "text-white"], [1, "sr-only"], [1, "header-right"], [1, "dropdown", "ml-auto"], ["href", "#", "data-toggle", "dropdown"], [1, "mr-2", "d-none", "d-sm-inline-block", "text-white"], [1, "avatar"], ["alt", "image", 1, "rounded-circle", 3, "src"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", "data-navigation-target", "contact-information", 1, "dropdown-item"], ["href", "#", "data-toggle", "modal", "data-target", "#settingModal", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "dropdown-item", "cursor-pointer", "text-primary", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Favorites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figure", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_33_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user ? ctx.user.name : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user ? ctx.user.photoUrl : "../../../assets/images/avatar3.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["header.main-header[_ngcontent-%COMP%] {\r\n  background-color: #26a69a;\r\n  padding: .5rem 0 .5rem 1rem;\r\n}\r\n\r\nheader.main-header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\r\n  margin: -25px;\r\n  width: 450px;\r\n  height: 60px;\r\n  max-width: 70%;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 5px;\r\n}\r\n\r\nheader.main-header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n}\r\n\r\nheader.main-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   figure.avatar[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  height: 2.3rem;\r\n  width: 2.3rem;\r\n  border-radius: 50%;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   figure.avatar[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   figure.avatar[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n  object-fit: cover;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover {\r\n  font-weight: 500;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  font-weight: 500;\r\n}\r\n\r\n@media (min-width:992px) {\r\n  header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  #navbarSupportedContent[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBS2QsYUFBYTtFQUtiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFLRSxhQUFhO0VBS2I7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFHYixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlci5tYWluLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YTY5YTtcclxuICBwYWRkaW5nOiAuNXJlbSAwIC41cmVtIDFyZW07XHJcbn1cclxuXHJcbmhlYWRlci5tYWluLWhlYWRlciAjbG9nbyB7XHJcbiAgbWFyZ2luOiAtMjVweDtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG5oZWFkZXIubWFpbi1oZWFkZXIgI2xvZ28gaW1nIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmhlYWRlci5tYWluLWhlYWRlciAuaGVhZGVyLXJpZ2h0IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcblxyXG5oZWFkZXIgZmlndXJlLmF2YXRhciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAyLjNyZW07XHJcbiAgd2lkdGg6IDIuM3JlbTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmhlYWRlciBmaWd1cmUuYXZhdGFyPmE+aW1nLFxyXG5oZWFkZXIgZmlndXJlLmF2YXRhcj5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuaGVhZGVyIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIgYS5uYXYtbGluazpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaGVhZGVyIC5oZWFkZXItcmlnaHQgc3Bhbjpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcclxuICBoZWFkZXIgLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["SocialAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/home/home.module.ts ***!
    \************************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppComponentsHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/components/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _commons_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../commons/common */
    "./src/app/commons/common.ts");
    /* harmony import */


    var _commons_enum_api_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../commons/enum/api-status.enum */
    "./src/app/commons/enum/api-status.enum.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/api/api.service */
    "./src/app/services/api/api.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../services/auth/auth-guard.service */
    "./src/app/services/auth/auth-guard.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
      }
    }

    function LoginComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_20_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_20_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_20_div_2_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formLoginControls.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formLoginControls.email.errors.email);
      }
    }

    function LoginComponent_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formLoginControls.password.errors.required);
      }
    }

    function LoginComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsg);
      }
    }

    function LoginComponent_div_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_34_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_34_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_34_div_2_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formSignUpControls.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formSignUpControls.email.errors.email);
      }
    }

    function LoginComponent_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password requires at least 8 alphanumeric characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_37_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_37_div_2_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formSignUpControls.password.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formSignUpControls.password.errors.minLength);
      }
    }

    var _c0 = function _c0() {
      return ["/reset-password"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(apiService, authService, authGuardService, router, authSocialService) {
        _classCallCheck(this, LoginComponent);

        this.apiService = apiService;
        this.authService = authService;
        this.authGuardService = authGuardService;
        this.router = router;
        this.authSocialService = authSocialService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authGuardService.checkAuthOut();
          this.isLogin = true;
          this.initLoginForm();
          this.initSignUpForm();
          this.loginWithSocialNetwork();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true); // Unsubscribe from the subject

          this.destroy$.unsubscribe();
        }
        /**
         * changeAction
         * Event when change action login <-> sign up
         * @memberof LoginComponent
         */

      }, {
        key: "changeAction",
        value: function changeAction() {
          this.isLogin = !this.isLogin;
        }
        /**
         * login
         * Event when loginForm submit
         * @returns void
         * @memberof LoginComponent
         */

      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          // Check form validate
          if (this.loginForm.invalid) {
            return;
          } // Setting data body to request API


          var dataBody = {
            email: this.loginForm.get(_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].KEYS.email).value,
            password: this.loginForm.get(_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].KEYS.password).value
          }; // Call login API

          this.apiService.senPostRequest(_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].API.login, dataBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            if (data.status === _commons_enum_api_status_enum__WEBPACK_IMPORTED_MODULE_6__["ApiStatus"].SUCCESS) {
              // Save token and redirect to Home
              _this2.authService.setToken(data.token);

              _this2.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].PATHS.home]);
            } else {
              // Show error message
              _this2.errorMsg = data.message;
            }
          });
        }
        /**
         * signUp
         * Event when signUpForm submit
         * @memberof LoginComponent
         */

      }, {
        key: "signUp",
        value: function signUp() {}
        /**
         * signInWithFB
         *
         * @memberof LoginComponent
         */

      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          this.authSocialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID);
        }
        /**
         * signInWithGoogle
         *
         * @memberof LoginComponent
         */

      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          this.authSocialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
        }
        /**
         * initLoginForm
         * Init loginForm FormGroup
         * @private
         * @memberof LoginComponent
         */

      }, {
        key: "initLoginForm",
        value: function initLoginForm() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
        /**
         * initSignForm
         * Init signUpForm FormGroup
         * @private
         * @memberof LoginComponent
         */

      }, {
        key: "initSignUpForm",
        value: function initSignUpForm() {
          this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
          }, {
            validators: this.checkPasswords
          });
        }
        /**
         * checkPasswords
         * Validator confirm password
         * @private
         * @param {FormGroup} group
         * @returns
         * @memberof LoginComponent
         */

      }, {
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var pass = group.get(_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].KEYS.password).value;
          var confirmPass = group.get(_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].KEYS.confirm).value;
          return pass === confirmPass ? null : {
            notSame: true
          };
        }
        /**
         * loginWithSocialNetwork
         * Call API to save user data
         * @private
         * @memberof LoginComponent
         */

      }, {
        key: "loginWithSocialNetwork",
        value: function loginWithSocialNetwork() {
          var _this3 = this;

          this.authSocialService.authState.subscribe(function (user) {
            if (user) {
              _this3.authService.setProfile(user);

              var url;

              if (user.provider === angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID) {
                url = _commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].API.googleLogin;
              } else {
                url = _commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].API.facebookLogin;
              }

              _this3.apiService.senPostRequest(url, {
                access_token: user.authToken
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this3.destroy$)).subscribe(function (data) {
                if (data.status === _commons_enum_api_status_enum__WEBPACK_IMPORTED_MODULE_6__["ApiStatus"].SUCCESS) {
                  // Save token and redirect to Home
                  _this3.authService.setToken(data.token);

                  _this3.authService.isNotRefresh = true;

                  _this3.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].PATHS.home]);
                } else {
                  // Show error message
                  _this3.errorMsg = data.message;
                }
              });
            } else {
              _this3.authService.setProfile(null);

              _this3.authService.removeToken();

              _this3.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_5__["Common"].PATHS.login]); // location.href = '/' + Common.PATHS.login;

            }
          });
        }
      }, {
        key: "formLoginControls",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "formSignUpControls",
        get: function get() {
          return this.signUpForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 43,
      vars: 18,
      consts: [[1, "row", "main-area"], [1, "login-box"], [1, "col-12"], ["src", "../../../assets/images/logo_hz.png", "alt", "", 1, "logo"], [1, "lb-header"], ["id", "login-box-link", 3, "click"], ["id", "signup-box-link", 3, "click"], [1, "social-login"], ["title", "Signin with Facebook", 1, "login-facebook", "cursor-pointer", 3, "click"], [1, "fa", "fa-facebook", "fa-lg"], ["title", "Signin with Google", 1, "login-google", "cursor-pointer", 3, "click"], [1, "fa", "fa-google-plus", "fa-lg"], [1, "email-login", 3, "formGroup", "hidden", "ngSubmit"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "u-form-group"], ["formControlName", "email", "type", "email", "placeholder", "Email", "id", "login_email"], ["class", "help-block", 4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", "id", "login-pass"], ["type", "submit", 1, "btn", "btn-success"], [1, "forgot-password", 3, "routerLink"], [1, "email-signup", 3, "formGroup", "hidden", "ngSubmit"], ["formControlName", "email", "type", "email", "placeholder", "Email"], ["formControlName", "password", "type", "password", "placeholder", "Password"], ["formControlName", "confirm", "type", "password", "placeholder", "Confirm Password"], ["role", "alert", 1, "alert", "alert-danger"], [1, "help-block"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_5_listener() {
            return ctx.changeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_7_listener() {
            return ctx.changeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_10_listener() {
            return ctx.signInWithFB();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_13_listener() {
            return ctx.signInWithGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_16_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 3, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Forgot password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_30_listener() {
            return ctx.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_div_34_Template, 3, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, LoginComponent_div_37_Template, 3, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isLogin ? "active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!ctx.isLogin ? "active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm)("hidden", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formLoginControls.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formLoginControls.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm)("hidden", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSignUpControls.email.touched && ctx.formSignUpControls.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSignUpControls.password.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]],
      styles: [".main-area[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  background-color: #1cbb9b;\r\n  margin: 0;\r\n}\r\n\r\n.login-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: auto;\r\n  background-color: #fff;\r\n  padding: 10px;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);\r\n}\r\n\r\n.lb-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #00415d;\r\n  margin: 5px 5px 10px 5px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid #eee;\r\n  text-align: center;\r\n  height: 28px;\r\n}\r\n\r\n.lb-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin: 0 25px;\r\n  padding: 0 20px;\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  transition: all 0.1s linear;\r\n  cursor: pointer;\r\n}\r\n\r\n.lb-header[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  color: #029f5b;\r\n  font-size: 18px;\r\n}\r\n\r\n.social-login[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n.social-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 49%;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding: 12px;\r\n  border-radius: 2px;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.login-google[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n.login-facebook[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.social-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n\r\n.social-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\r\n  background-color: #49639F;\r\n}\r\n\r\n.social-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\r\n  background-color: #DF4A32;\r\n}\r\n\r\n.email-login[_ngcontent-%COMP%], .email-signup[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.u-form-group[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.u-form-group[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .u-form-group[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 45px;\r\n  outline: none;\r\n  border: 1px solid #ddd;\r\n  padding: 0 10px;\r\n  border-radius: 2px;\r\n  color: #333;\r\n  font-size: 0.8rem;\r\n  transition: all 0.1s linear;\r\n}\r\n\r\n.u-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  border-color: #358efb;\r\n}\r\n\r\n.u-form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  background-color: #1CB94E;\r\n  border: none;\r\n  outline: none;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  padding: 14px 0;\r\n  border-radius: 2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  text-align: left;\r\n  text-decoration: underline;\r\n  color: #888;\r\n  font-size: 0.75rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: #DF4A32;\r\n  font-size: 12px;\r\n  padding: 5px 0 10px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  max-width: 365px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUdmLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFHakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYXJlYSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNiYjliO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcclxufVxyXG5cclxuLmxiLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjMDA0MTVkO1xyXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4ubGItaGVhZGVyIGEge1xyXG4gIG1hcmdpbjogMCAyNXB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYi1oZWFkZXIgLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMjlmNWI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAxNXB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4gYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0OSU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWdvb2dsZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubG9naW4tZmFjZWJvb2sge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIGEgaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHRvcDogMnB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIGE6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTYzOUY7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4gYTpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREY0QTMyO1xyXG59XHJcblxyXG4uZW1haWwtbG9naW4sXHJcbi5lbWFpbC1zaWdudXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51LWZvcm0tZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi51LWZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4udS1mb3JtLWdyb3VwIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxufVxyXG5cclxuLnUtZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzU4ZWZiO1xyXG59XHJcblxyXG4udS1mb3JtLWdyb3VwIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCOTRFO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjREY0QTMyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA1cHggMCAxMHB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWF4LXdpZHRoOiAzNjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/login/login.module.ts ***!
    \**************************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppComponentsLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 2,
      vars: 0,
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " profile works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/profile/profile.module.ts ***!
    \******************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppComponentsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/components/profile/profile.component.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 2,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " register works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/register/register.module.ts ***!
    \********************************************************/

  /*! exports provided: RegisterModule */

  /***/
  function srcAppComponentsRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/components/register/register.component.ts");

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };

    RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegisterModule
    });
    RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegisterModule_Factory(t) {
        return new (t || RegisterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterModule, {
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/reset-password/reset-password.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/reset-password/reset-password.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppComponentsResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent() {
        _classCallCheck(this, ResetPasswordComponent);
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)();
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 2,
      vars: 0,
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " reset-password works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html',
          styleUrls: ['./reset-password.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/reset-password/reset-password.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/reset-password/reset-password.module.ts ***!
    \********************************************************************/

  /*! exports provided: ResetPasswordModule */

  /***/
  function srcAppComponentsResetPasswordResetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function () {
      return ResetPasswordModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reset-password.component */
    "./src/app/components/reset-password/reset-password.component.ts");

    var ResetPasswordModule = function ResetPasswordModule() {
      _classCallCheck(this, ResetPasswordModule);
    };

    ResetPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResetPasswordModule
    });
    ResetPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResetPasswordModule_Factory(t) {
        return new (t || ResetPasswordModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetPasswordModule, {
        declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api/api.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/api/api.service.ts ***!
    \*********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_commons_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/commons/common */
    "./src/app/commons/common.ts");
    /* harmony import */


    var src_app_commons_enum_api_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/commons/enum/api-status.enum */
    "./src/app/commons/enum/api-status.enum.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient, authService) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.authService = authService;
      }

      _createClass(ApiService, [{
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = 'Unknown error!';

          if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = "Error: ".concat(error.error.message);
          } else {
            // Server-side errors
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          window.alert(errorMessage);

          if (error.status === src_app_commons_enum_api_status_enum__WEBPACK_IMPORTED_MODULE_4__["ApiStatus"].AUTH_FAIL) {
            localStorage.clear();
            location.href = '/' + src_app_commons_common__WEBPACK_IMPORTED_MODULE_3__["Common"].PATHS.login;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }, {
        key: "sendGetRequest",
        value: function sendGetRequest(url) {
          return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "senPostRequest",
        value: function senPostRequest(url, requesData) {
          return this.httpClient.post(url, requesData, {
            headers: this.authService.noAuthHeaders()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "senPostRequestAuth",
        value: function senPostRequestAuth(url, requesData) {
          return this.httpClient.post(url, requesData, {
            headers: this.authService.authHeaders()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/auth-guard.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/auth/auth-guard.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _commons_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../commons/common */
    "./src/app/commons/common.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Angular modules
    // Commons


    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(auth, router) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isAuthenticated()) {
            this.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_1__["Common"].PATHS.login]);
            return false;
          }

          return true;
        }
      }, {
        key: "checkAuthOut",
        value: function checkAuthOut() {
          if (this.auth.isAuthenticated()) {
            this.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_1__["Common"].PATHS.home]);
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _commons_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../commons/common */
    "./src/app/commons/common.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js"); // Angular modules
    // Commons


    var AuthService = /*#__PURE__*/function () {
      function AuthService(jwtHelper) {
        _classCallCheck(this, AuthService);

        this.jwtHelper = jwtHelper;
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = this.getToken();
          return !this.jwtHelper.isTokenExpired(token);
        }
      }, {
        key: "noAuthHeaders",
        value: function noAuthHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Content-Type', 'application/json');
          return headers;
        }
      }, {
        key: "authHeaders",
        value: function authHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Content-Type', 'application/json');
          headers = headers.append('Authorization', 'JWT ' + this.getToken());
          return headers;
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem(_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].KEYS.token, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem(_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].KEYS.token);
        }
      }, {
        key: "removeToken",
        value: function removeToken() {
          localStorage.removeItem(_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].KEYS.token);
          localStorage.removeItem(_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].KEYS.profile);
        }
      }, {
        key: "setProfile",
        value: function setProfile(profile) {
          localStorage.setItem(_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].KEYS.profile, JSON.stringify(profile));
          this.profile = profile;
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          if (!this.profile) {
            this.profile = JSON.parse(localStorage.getItem(_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].KEYS.profile));
          }

          return this.profile;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/role-guard.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/auth/role-guard.service.ts ***!
    \*****************************************************/

  /*! exports provided: RoleGuardService */

  /***/
  function srcAppServicesAuthRoleGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleGuardService", function () {
      return RoleGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _commons_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../commons/common */
    "./src/app/commons/common.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Angular module
    // Commons


    var RoleGuardService = /*#__PURE__*/function () {
      function RoleGuardService(auth, router) {
        _classCallCheck(this, RoleGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(RoleGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          // this will be passed from the route config
          // on the data property
          var expectedRole = route.data.expectedRole;
          var token = localStorage.getItem(_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].KEYS.token);

          if (!token) {
            this.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].PATHS.login]);
            return false;
          } // decode the token to get its payload


          var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);

          if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
            this.router.navigate([_commons_common__WEBPACK_IMPORTED_MODULE_2__["Common"].PATHS.login]);
            return false;
          }

          return true;
        }
      }]);

      return RoleGuardService;
    }();

    RoleGuardService.ɵfac = function RoleGuardService_Factory(t) {
      return new (t || RoleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RoleGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoleGuardService,
      factory: RoleGuardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\PROJECTS\ChatWork\InternChatwork\chatwork\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map