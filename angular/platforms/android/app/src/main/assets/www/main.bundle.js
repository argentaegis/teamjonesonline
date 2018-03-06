webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <br/>\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('deviceready', function () {
            alert(device.platform);
        }, false);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authToken_interceptor__ = __webpack_require__("./src/app/services/authToken.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_translator_translate_translate_component__ = __webpack_require__("./src/app/components/translator/translate/translate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_translate_service__ = __webpack_require__("./src/app/services/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_image_analysis_service__ = __webpack_require__("./src/app/services/image-analysis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_translator_translate_audio_translate_audio_component__ = __webpack_require__("./src/app/components/translator/translate-audio/translate-audio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_translator_translate_image_translate_image_component__ = __webpack_require__("./src/app/components/translator/translate-image/translate-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ack_angular_webcam__ = __webpack_require__("./node_modules/ack-angular-webcam/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ack_angular_webcam___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ack_angular_webcam__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_translator_translate_text_translate_text_component__ = __webpack_require__("./src/app/components/translator/translate-text/translate-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_translator_select_languages_component_select_languages_component_component__ = __webpack_require__("./src/app/components/translator/select-languages-component/select-languages-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__components_translator_translate_translate_component__["a" /* TranslateComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_translator_translate_translate_component__["a" /* TranslateComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_translator_translate_image_translate_image_component__["a" /* TranslateImageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_translator_translate_audio_translate_audio_component__["a" /* TranslateAudioComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_translator_translate_text_translate_text_component__["a" /* TranslateTextComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_translator_select_languages_component_select_languages_component_component__["a" /* SelectLanguagesComponentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ack_angular_webcam__["WebCamModule"],
                __WEBPACK_IMPORTED_MODULE_26_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_15__services_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_16__services_authToken_interceptor__["a" /* TokenInterceptor */],
                    multi: true,
                },
                __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_19__services_translate_service__["a" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_20__services_image_analysis_service__["a" /* ImageAnalysisService */],
                __WEBPACK_IMPORTED_MODULE_27_ngx_cookie_service__["a" /* CookieService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-3\" [routerLink]=\"['/translate']\">Translator</h1>\r\n  <p class=\"lead\">A translator app using Google Cloud Translation API.</p>\r\n  <p class=\"lead\">\r\n    <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/translate']\" role=\"button\">Try it!</a>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>Tu Comprends</h1>\r\n  <p class=\"lead\">Welcome to Tu Comprends</p>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/translate']\">Translate</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input required class=\"form-control\" formControlName=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" required class=\"form-control\" formControlName=\"password\">\r\n  </div>\r\n  <button type=\"submit\" [disabled]=\"loginForm.pristine\" class=\"btn btn-primary\">Login</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, fb, authService, flashMessage) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            username: '',
            password: ''
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = this.loginForm.value;
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessage.show("Login successful.", { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show("Incorrect username or password.", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Tu Comprends</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isCollapsed = !isCollapsed\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!--<div [ngClass]=\"isCollapsed == false ? 'collapse navbar-collapse' : 'navbar-collapse'\" id=\"navbarColor01\">-->\r\n    <!--<ul class=\"navbar-nav mr-auto navbar-left\">-->\r\n      <!--<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>-->\r\n      <!--</li>-->\r\n    <!--</ul>-->\r\n    <!--<ul class=\"navbar-nav navbar-right\">-->\r\n      <!--<li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions] = \"{exact:true}\">-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>-->\r\n      <!--</li>-->\r\n      <!--<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions] = \"{exact:true}\">-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>-->\r\n      <!--</li>-->\r\n      <!--<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions] = \"{exact:true}\">-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>-->\r\n      <!--</li>-->\r\n      <!--<li *ngIf=\"authService.loggedIn()\">-->\r\n        <!--<a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>-->\r\n      <!--</li>-->\r\n      <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions] = \"{exact:true}\">-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>-->\r\n      <!--</li>-->\r\n    <!--</ul>-->\r\n  <!--</div>-->\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isCollapsed = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out.', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserProfile().subscribe(function (profile) {
            console.log(profile);
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registrationForm\" (ngSubmit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input formControlName=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input formControlName=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"username.errors.required\">\r\n      Username is required.\r\n    </div>\r\n    <div *ngIf=\"username.errors.usernameExists\">\r\n      That username is already in use.\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"email\" formControlName=\"email\" class=\"form-control\">\r\n  </div>\r\n  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"email.errors.email\">\r\n      Please enter a valid email address.\r\n    </div>\r\n    <div *ngIf=\"email.errors.required\">\r\n      Email is required.\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\">\r\n  </div>\r\n  <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"password.errors.minlength\">\r\n      Passwords must be 8 or more characters.\r\n    </div>\r\n    <div *ngIf=\"password.errors.required\">\r\n      Passwords is required.\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" formControlName=\"passwordEcho\" class=\"form-control\">\r\n  </div>\r\n  <div *ngIf=\"registrationForm.errors && registrationForm.errors.match && (passwordEcho.dirty || passwordEcho.touched) && (passwordEcho.dirty || passwordEcho.touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"registrationForm.errors && registrationForm.errors.match\">\r\n      Passwords do not match.\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" [disabled]=\"registrationForm.pristine\" class=\"btn btn-primary\">Register</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_usernameExistsValidator__ = __webpack_require__("./src/app/validators/usernameExistsValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_passwordsMatchValidator__ = __webpack_require__("./src/app/validators/passwordsMatchValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router, fb) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.user = { name: '', username: '', email: '', password: '', passwordEcho: '' };
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.registrationForm = this.fb.group({
            name: '',
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.user.username, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required], [Object(__WEBPACK_IMPORTED_MODULE_6__validators_usernameExistsValidator__["a" /* usernameExistsValidator */])(this.authService)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.user.email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.user.password, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8)
            ]),
            passwordEcho: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.user.passwordEcho, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8),
            ])
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_7__validators_passwordsMatchValidator__["a" /* passwordsMatchValidator */]
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = this.registrationForm.value;
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields.", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please enter a valid email.", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //
        //
        // class AuthResponse{
        //   success: boolean;
        //   msg: string;
        //
        //   constructor(suc: boolean, message: string){
        //     this.success = suc;
        //     this.msg = message;
        //   }
        // }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You have been registered.", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                if (data.msg == "Username exists") {
                    _this.flashMessage.show("This username already exists.", { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                }
                else {
                    _this.flashMessage.show("There was an error registering the user.", { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                }
            }
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registrationForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registrationForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registrationForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordEcho", {
        get: function () {
            return this.registrationForm.get('passwordEcho');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "user", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/translator/languages.json":
/***/ (function(module, exports) {

module.exports = {"languages":[{"code":"en","name":"English","nativeName":"English","icon":""},{"code":"fr","name":"French","nativeName":"français","icon":""},{"code":"es","name":"Spanish","nativeName":"Español","icon":""},{"code":"de","name":"German","nativeName":"Deutsch","icon":""}]}

/***/ }),

/***/ "./src/app/components/translator/select-languages-component/select-languages-component.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translator/select-languages-component/select-languages-component.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"selectLanguagesForm\">\n  <label class=\"control-label\" for=\"nativeLanguageSelect\">Translate</label>\n  <select id=\"nativeLanguageSelect\" class=\"form-control\" formControlName=\"nativeLanguageSelect\" (change)=\"languageChanged('native')\" class=\"nav-item dropdown show\">\n    <option *ngFor=\"let x of myLanguages.languages\"\n            [ngValue]=\"x\">{{ x.nativeName }}</option>\n  </select>\n\n  <label class=\"control-label\" for=\"foreignLanguageSelect\">and</label>\n  <select id=\"foreignLanguageSelect\" class=\"form-control\" formControlName=\"foreignLanguageSelect\" (change)=\"languageChanged('foreign')\" class=\"nav-item dropdown show\">\n    <option *ngFor=\"let x of myLanguages.languages\"\n            [ngValue]=\"x\">{{ x.nativeName }}</option>\n  </select>\n</form>\n\n"

/***/ }),

/***/ "./src/app/components/translator/select-languages-component/select-languages-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLanguagesComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var languages = __webpack_require__("./src/app/components/translator/languages.json");
var SelectLanguagesComponentComponent = (function () {
    function SelectLanguagesComponentComponent(fb, cookies) {
        this.fb = fb;
        this.cookies = cookies;
        this.myLanguages = languages;
        this.createForm();
    }
    SelectLanguagesComponentComponent.prototype.createForm = function () {
        this.selectLanguagesForm = this.fb.group({
            nativeLanguageSelect: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.nativeLanguageSelect),
            foreignLanguageSelect: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.foreignLanguageSelect)
        });
        this.initCurrentLanguagesValues();
        console.log('SelectLanguagesComponentComponent.component');
        console.log(this.selectLanguagesForm.value);
    };
    SelectLanguagesComponentComponent.prototype.ngOnInit = function () {
        this.parentForm.addControl('selectLanguagesForm', this.selectLanguagesForm);
    };
    SelectLanguagesComponentComponent.prototype.languageChanged = function (type) {
        console.log(type);
        if (type == 'native') {
            console.log('NATIVE');
            console.log(this.selectLanguagesForm.controls['nativeLanguageSelect'].value.code);
            this.cookies.set('translator_current_native', this.selectLanguagesForm.controls['nativeLanguageSelect'].value.code);
        }
        else if (type == 'foreign') {
            console.log('FOREIGN');
            this.cookies.set('translator_current_foreign', this.selectLanguagesForm.controls['foreignLanguageSelect'].value.code);
        }
    };
    SelectLanguagesComponentComponent.prototype.getLanguageByCode = function (code) {
        return this.myLanguages.languages.filter(function (obj) {
            return obj.code == code;
        })[0];
    };
    SelectLanguagesComponentComponent.prototype.initCurrentLanguagesValues = function () {
        var native = this.cookies.get('translator_current_native');
        var foreign = this.cookies.get('translator_current_foreign');
        console.log('cookies');
        console.log(native);
        console.log(foreign);
        var all = this.cookies.getAll();
        console.log(all);
        if (!native) {
            console.log('!NATIVE');
            native = 'en';
        }
        if (!foreign) {
            console.log('!FOREIGN');
            foreign = 'fr';
        }
        this.selectLanguagesForm.controls['nativeLanguageSelect'].setValue(this.getLanguageByCode(native));
        this.selectLanguagesForm.controls['foreignLanguageSelect'].setValue(this.getLanguageByCode(foreign));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parentForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], SelectLanguagesComponentComponent.prototype, "parentForm", void 0);
    SelectLanguagesComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-languages-component',
            template: __webpack_require__("./src/app/components/translator/select-languages-component/select-languages-component.component.html"),
            styles: [__webpack_require__("./src/app/components/translator/select-languages-component/select-languages-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], SelectLanguagesComponentComponent);
    return SelectLanguagesComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/translator/translate-audio/translate-audio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translator/translate-audio/translate-audio.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"translateAudioForm\">\r\n  <div>\r\n    <label><fa [name]=\"'microphone'\" [size]=1></fa> {{getSourceLanguage().nativeName}}</label>\r\n    <br>\r\n\r\n    <textarea class=\"form-control\" rows=\"5\" readonly=\"readonly\"\r\n              [innerHTML]=\"originalText\"></textarea>\r\n  </div>\r\n  <br>\r\n  <div class=\"text-center\">\r\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n      <div *ngIf=\"!recording\">\r\n        <fa class=\"btn btn-primary\" [name]=\"'microphone'\" [size]=2 (click)=\"onStartRecording()\"></fa>\r\n      </div>\r\n      <div *ngIf=\"recording\">\r\n\r\n        <fa class=\"btn btn-primary\" [name]=\"'stop-circle'\" [size]=2 (click)=\"onStopRecording()\"></fa>\r\n      </div>\r\n      <fa class=\"btn btn-secondary\" [name]=\"'exchange'\" [rotate]=\"90\" [size]=2 (click)=\"flipTranslation()\"></fa>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <label><fa [name]=\"'align-left'\" [size]=1></fa>{{getTargetLanguage().nativeName}}</label>\r\n    <br>\r\n    <textarea class=\"form-control\" rows=\"5\" readonly=\"readonly\"\r\n              [innerHTML]=\"translatedText\"></textarea>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/translator/translate-audio/translate-audio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateAudioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_translate_service__ = __webpack_require__("./src/app/services/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaStreamRecorder = __webpack_require__("./node_modules/msr/MediaStreamRecorder.js");
var TranslateAudioComponent = (function () {
    function TranslateAudioComponent(fb, translateService) {
        this.fb = fb;
        this.translateService = translateService;
        this.mediaConstraints = {
            audio: true
        };
        this.createForm();
        this.recording = false;
        this.flipSource = false;
    }
    TranslateAudioComponent.prototype.createForm = function () {
        this.translateAudioForm = this.fb.group({});
    };
    TranslateAudioComponent.prototype.ngOnInit = function () {
        this.parentForm.addControl('translateAudioForm', this.translateAudioForm);
        this.onLanguageSelectionChanges();
    };
    TranslateAudioComponent.prototype.onLanguageSelectionChanges = function () {
        this.parentForm.get('selectLanguagesForm').valueChanges.subscribe(function (val) {
        });
    };
    TranslateAudioComponent.prototype.onStartRecording = function () {
        this.recording = true;
        navigator.mediaDevices.getUserMedia(this.mediaConstraints).then(function (stream) {
            var _this = this;
            this.audioRecorder = new MediaStreamRecorder.StereoAudioRecorder(stream);
            this.audioRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
            this.audioRecorder.audioChannels = 1;
            this.audioRecorder.ondataavailable = function (blob) {
                var mediaData = '';
                var reader = new FileReader();
                reader.onloadend = function () {
                    var _this = this;
                    mediaData = reader.result;
                    var translateRequest = {
                        sourceText: '',
                        sourceImage: '',
                        sourceLang: this.getSourceLanguage().code,
                        targetLang: this.getTargetLanguage().code,
                        mediaBase64: mediaData
                    };
                    console.log('translateRequest');
                    console.log(translateRequest);
                    this.translateService.translateAudio(translateRequest).subscribe(function (data) {
                        _this.updateTranslation(data.translation);
                    });
                    this.onStopRecording();
                }.bind(_this);
                reader.readAsDataURL(blob);
            };
            this.audioRecorder.start(30000);
        }.bind(this));
    };
    ;
    TranslateAudioComponent.prototype.onStopRecording = function () {
        this.audioRecorder.stop();
        this.recording = false;
    };
    TranslateAudioComponent.prototype.onMediaError = function (e) {
        console.error('media error', e);
    };
    ;
    TranslateAudioComponent.prototype.updateTranslation = function (translation) {
        console.log('updateTranslation: ' + translation);
        console.log(translation);
        var translatedValue = '';
        var originalValue = '';
        if (Array.isArray(translation)) {
            console.log('array: ' + translation);
            translation.forEach(function (trans) {
                console.log(trans);
                translatedValue = translatedValue.concat(trans.translatedText + '<br>');
                originalValue = originalValue.concat(trans.originalText + '<br>');
                console.log(translatedValue);
            });
        }
        else {
            console.log('notarray: ' + translation);
            translatedValue = translation.translatedText;
            originalValue = translation.originalText;
        }
        this.translatedText = translatedValue;
        this.originalText = originalValue;
    };
    TranslateAudioComponent.prototype.getSourceLanguage = function () {
        if (this.flipSource) {
            return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;
        }
        else {
            return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
        }
    };
    TranslateAudioComponent.prototype.getTargetLanguage = function () {
        if (this.flipSource) {
            return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
        }
        else {
            return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;
        }
    };
    TranslateAudioComponent.prototype.flipTranslation = function () {
        this.flipSource = !this.flipSource;
        this.clearForm();
    };
    TranslateAudioComponent.prototype.clearForm = function () {
        this.originalText = '';
        this.translatedText = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parentForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */])
    ], TranslateAudioComponent.prototype, "parentForm", void 0);
    TranslateAudioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-translate-audio',
            template: __webpack_require__("./src/app/components/translator/translate-audio/translate-audio.component.html"),
            styles: [__webpack_require__("./src/app/components/translator/translate-audio/translate-audio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_translate_service__["a" /* TranslateService */]])
    ], TranslateAudioComponent);
    return TranslateAudioComponent;
}());



/***/ }),

/***/ "./src/app/components/translator/translate-image/translate-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translator/translate-image/translate-image.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"translateImageForm\">\r\n  <div *ngIf=\"cameraOn\" class=\"text-center\">\r\n      <ack-webcam *ngIf=\"!translating\"\r\n                  [(ref)]   = \"webcam\"\r\n                  [options] = \"webcamOptions\"\r\n                  [useParentWidthHeight] = \"useParentWidthHeight\"\r\n                  [facingMode]  = \"facingMode\"\r\n                  (success) = \"onCamSuccess($event)\"\r\n                  (catch)   = \"onCamError($event)\"></ack-webcam>\r\n      <img *ngIf=\"translating\" src=\"{{imageSource}}\" class=\"translate-image\" />\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n      <div *ngIf=\"!cameraOn\">\r\n        <fa  class=\"btn btn-primary\" [name]=\"'camera'\" [size]=2 (click)=\"turnCameraOn()\"></fa>\r\n      </div>\r\n      <div *ngIf=\"cameraOn\">\r\n        <fa *ngIf=\"!translating\"  class=\"btn btn-primary\" [name]=\"'image'\" [size]=2 (click)=\"genBase64Image()\"></fa>\r\n        <fa *ngIf=\"translating\"  class=\"btn btn-outline-primary\" [name]=\"'image'\"></fa>\r\n      </div>\r\n      <fa class=\"btn btn-secondary\" [name]=\"'exchange'\" [rotate]=\"90\" [size]=2 (click)=\"flipTranslation()\"></fa>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>{{getSourceLanguage().nativeName}}</label>\r\n    <textarea class=\"form-control\" readonly=\"readonly\" [innerHTML]=\"translatedText\"></textarea>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/translator/translate-image/translate-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_translate_service__ = __webpack_require__("./src/app/services/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslateImageComponent = (function () {
    function TranslateImageComponent(fb, translateService) {
        this.fb = fb;
        this.translateService = translateService;
        this.cameraOn = false;
        this.facingMode = 'environment';
        this.useParentWidthHeight = true;
        this.createForm();
    }
    TranslateImageComponent.prototype.createForm = function () {
        this.translateImageForm = this.fb.group({});
    };
    TranslateImageComponent.prototype.ngOnInit = function () {
        this.parentForm.addControl('translateImageForm', this.translateImageForm);
    };
    TranslateImageComponent.prototype.updateTranslation = function (translation, msg) {
        console.log('updateTranslation: ' + translation);
        console.log(translation);
        var translatedValue = '';
        if (Array.isArray(translation)) {
            console.log('array: ' + translation);
            translation.forEach(function (trans) {
                console.log(trans);
                translatedValue = translatedValue.concat(trans.translatedText + '\n');
                console.log(translatedValue);
            });
        }
        else {
            console.log('notarray: ' + translation);
            if (translation) {
                console.log('msg: ' + msg);
                if (msg == 'translated image description') {
                    translatedValue = translation.translatedText + ' : ' + translation.originalText;
                }
                else {
                    translatedValue = translation.translatedText;
                }
            }
            else {
                translatedValue = 'No translation available.';
            }
        }
        this.translatedText = translatedValue;
    };
    TranslateImageComponent.prototype.genBase64Image = function () {
        var _this = this;
        this.translating = true;
        this.webcam.getBase64()
            .then(function (imageData) {
            _this.imageSource = imageData;
            var translateRequest = {
                sourceText: '',
                sourceImage: '',
                sourceLang: _this.getTargetLanguage().code,
                targetLang: _this.getSourceLanguage().code,
                mediaBase64: imageData
            };
            _this.translateService.translateImage(translateRequest).subscribe(function (res) {
                if (res.success) {
                    console.log(res);
                    _this.updateTranslation(res.translation, res.msg);
                    _this.translating = false;
                }
                else {
                    _this.updateTranslation(_this.tryAgainMessage, res.msg);
                    _this.translating = false;
                }
            });
        });
    };
    TranslateImageComponent.prototype.onCamError = function (err) { };
    TranslateImageComponent.prototype.onCamSuccess = function () { };
    TranslateImageComponent.prototype.flipTranslation = function () {
        this.flipSource = !this.flipSource;
        this.translatedText = '';
    };
    TranslateImageComponent.prototype.getSourceLanguage = function () {
        if (this.flipSource) {
            return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
        }
        else {
            return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;
        }
    };
    TranslateImageComponent.prototype.getTargetLanguage = function () {
        if (this.flipSource) {
            return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;
        }
        else {
            return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
        }
    };
    TranslateImageComponent.prototype.turnCameraOn = function () {
        this.cameraOn = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parentForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */])
    ], TranslateImageComponent.prototype, "parentForm", void 0);
    TranslateImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-translate-image',
            template: __webpack_require__("./src/app/components/translator/translate-image/translate-image.component.html"),
            styles: [__webpack_require__("./src/app/components/translator/translate-image/translate-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_translate_service__["a" /* TranslateService */]])
    ], TranslateImageComponent);
    return TranslateImageComponent;
}());



/***/ }),

/***/ "./src/app/components/translator/translate-text/translate-text.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translator/translate-text/translate-text.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"translateTextForm\" (ngSubmit)=\"onTranslateSubmit()\">\n  <div class=\"form-group\">\n    <label>{{getNativeLanguage().nativeName}}</label>\n    <input class=\"form-control\" formControlName=\"nativeText\" (keypress)=\"clearTextControl('translateText')\">\n  </div>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"translateTextForm.pristine\" >Translate</button>\n  </div>\n  <div class=\"form-group\">\n    <label>{{getTargetLanguage().nativeName}}</label>\n    <input class=\"form-control\" formControlName=\"translateText\" (keypress)=\"clearTextControl('nativeText')\">\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/translator/translate-text/translate-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_translate_service__ = __webpack_require__("./src/app/services/translate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslateTextComponent = (function () {
    function TranslateTextComponent(fb, translateService) {
        this.fb = fb;
        this.translateService = translateService;
        this.createForm();
    }
    TranslateTextComponent.prototype.ngOnInit = function () {
        this.parentForm.addControl('translateTextForm', this.translateTextForm);
        this.onLanguageSelectionChanges();
    };
    TranslateTextComponent.prototype.createForm = function () {
        this.translateTextForm = this.fb.group({
            nativeText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.nativeText),
            translateText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.translateText)
        });
    };
    TranslateTextComponent.prototype.onLanguageSelectionChanges = function () {
        var _this = this;
        this.parentForm.get('selectLanguagesForm').valueChanges.subscribe(function (val) {
            _this.clearForm();
        });
    };
    TranslateTextComponent.prototype.onTranslateSubmit = function () {
        var _this = this;
        var sourceText;
        var sourceLang;
        var targetLang;
        var translateToControlName;
        if (this.translateTextForm.value.nativeText !== '') {
            sourceText = this.translateTextForm.value.nativeText;
            sourceLang = this.getNativeLanguage().code;
            targetLang = this.getTargetLanguage().code;
            translateToControlName = 'translateText';
        }
        else {
            sourceText = this.translateTextForm.value.translateText;
            sourceLang = this.getTargetLanguage().code;
            targetLang = this.getNativeLanguage().code;
            translateToControlName = 'nativeText';
        }
        var translateRequest = {
            sourceText: sourceText,
            sourceImage: '',
            sourceLang: sourceLang,
            targetLang: targetLang,
            mediaBase64: ''
        };
        this.translateService.translateText(translateRequest).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.updateTranslation(data.translation, translateToControlName);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    ;
    TranslateTextComponent.prototype.updateTranslation = function (translation, translateToControlName) {
        console.log('updateTranslation: ' + translation);
        console.log(translation);
        var translatedValue = '';
        if (Array.isArray(translation)) {
            console.log('array: ' + translation);
            translation.forEach(function (trans) {
                console.log(trans);
                translatedValue = translatedValue.concat(trans.translatedText + '<br>');
                console.log(translatedValue);
            });
        }
        else {
            console.log('notarray: ' + translation);
            translatedValue = translation.translatedText;
        }
        this.translateTextForm.controls[translateToControlName].setValue(translatedValue);
    };
    TranslateTextComponent.prototype.getNativeLanguage = function () {
        return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;
    };
    TranslateTextComponent.prototype.getTargetLanguage = function () {
        return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
    };
    TranslateTextComponent.prototype.clearTextControl = function (controlToClear) {
        this.translateTextForm.controls[controlToClear].setValue('');
    };
    TranslateTextComponent.prototype.clearForm = function () {
        this.clearTextControl('nativeText');
        this.clearTextControl('translateText');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parentForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], TranslateTextComponent.prototype, "parentForm", void 0);
    TranslateTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-translate-text',
            template: __webpack_require__("./src/app/components/translator/translate-text/translate-text.component.html"),
            styles: [__webpack_require__("./src/app/components/translator/translate-text/translate-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_translate_service__["a" /* TranslateService */]])
    ], TranslateTextComponent);
    return TranslateTextComponent;
}());



/***/ }),

/***/ "./src/app/components/translator/translate/translate.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/translator/translate/translate.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"translateForm\">\r\n  <app-select-languages-component [parentForm]=\"translateForm\"></app-select-languages-component>\r\n\r\n  <div id=\"accordion\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" (click)=\"showCard('translateText')\" >\r\n        <h5 class=\"mb-0\">\r\n          <fa [name]=\"'align-left'\" [size]=1></fa>\r\n        </h5>\r\n      </div>\r\n      <div id=\"translateText\" [ngClass]=\"cardToShow == 'translateText' ? 'collapse show' : 'collapse'\"  aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <app-translate-text [parentForm]=\"translateForm\"></app-translate-text>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div calss=\"card\">\r\n      <div class=\"card-header\" (click)=\"showCard('translateAudio')\" >\r\n        <h5 class=\"mb-0\">\r\n          <fa [name]=\"'microphone'\" [size]=1></fa>\r\n        </h5>\r\n      </div>\r\n      <div id=\"translateAudio\" [ngClass]=\"cardToShow == 'translateAudio' ? 'collapse show' : 'collapse'\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <app-translate-audio [parentForm]=\"translateForm\"></app-translate-audio>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div calss=\"card\">\r\n      <div class=\"card-header\" (click)=\"showCard('translateImage')\" >\r\n        <h5 class=\"mb-0\">\r\n          <fa [name]=\"'camera'\" [size]=1></fa>\r\n        </h5>\r\n      </div>\r\n      <div id=\"translateImage\" [ngClass]=\"cardToShow == 'translateImage' ? 'collapse show' : 'collapse'\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <app-translate-image [parentForm]=\"translateForm\"></app-translate-image>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/translator/translate/translate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateComponent = (function () {
    function TranslateComponent(fb) {
        this.fb = fb;
        this.createForm();
        this.cardToShow = 'translateText';
    }
    TranslateComponent.prototype.createForm = function () {
        this.translateForm = this.fb.group({});
    };
    TranslateComponent.prototype.ngOnInit = function () {
        this.onChanges();
    };
    TranslateComponent.prototype.onChanges = function () {
        this.translateForm.valueChanges.subscribe(function (val) {
        });
    };
    TranslateComponent.prototype.showCard = function (cardName) {
        this.cardToShow = cardName;
        console.log('translate.component');
        console.log(this.translateForm.controls['selectLanguagesForm'].value);
    };
    TranslateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-translate',
            template: __webpack_require__("./src/app/components/translator/translate/translate.component.html"),
            styles: [__webpack_require__("./src/app/components/translator/translate/translate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], TranslateComponent);
    return TranslateComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, config) {
        this.http = http;
        this.config = config;
    }
    AuthService.prototype.registerUser = function (user) {
        var url = this.config.baseServiceUrl + 'users/register';
        return this.http.post(url, user);
    };
    AuthService.prototype.usernameExists = function (user) {
        var url = this.config.baseServiceUrl + 'users/usernameExists';
        return this.http.post(url, user);
    };
    AuthService.prototype.authenticateUser = function (user) {
        var url = this.config.baseServiceUrl + 'users/authenticate';
        return this.http.post(url, user);
    };
    AuthService.prototype.getUserProfile = function () {
        var url = this.config.baseServiceUrl + 'users/profile';
        var profileVal = this.http.get(url);
        return profileVal;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem("id_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])(null, localStorage.getItem('id_token'));
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authToken.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenInterceptor = (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "" + localStorage.getItem('id_token')
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this.baseServiceUrl = "https://www.tucomprends.com/";
        //this.baseServiceUrl = "https://translate-env.us-east-2.elasticbeanstalk.com/";
        //this.baseServiceUrl = "https://localhost:8443/";
    }
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/image-analysis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageAnalysisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageAnalysisService = (function () {
    function ImageAnalysisService(http, config) {
        this.http = http;
        this.config = config;
    }
    ImageAnalysisService.prototype.imageToText = function (imageBase64) {
        var apikey = '40d2753c22e796b29eed3db91be4223520cc6696';
        var url = 'https://vision.googleapis.com/v1/images:annotate?key=' + apikey;
        var requestJSON = {
            'requests': [
                {
                    'image': {
                        'content': imageBase64
                    },
                    'features': [
                        {
                            'type': 'TEXT_DETECTION',
                            'maxResults': 1
                        }
                    ]
                }
            ]
        };
        console.log('Req: ' + requestJSON);
        return this.http.post(url, requestJSON);
    };
    ImageAnalysisService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], ImageAnalysisService);
    return ImageAnalysisService;
}());



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslateService = (function () {
    function TranslateService(http, config) {
        this.http = http;
        this.config = config;
    }
    TranslateService.prototype.translateText = function (translateRequest) {
        var url = this.config.baseServiceUrl + 'translate/translateText';
        return this.http.post(url, translateRequest);
    };
    TranslateService.prototype.translateImage = function (translateRequest) {
        var url = this.config.baseServiceUrl + 'translate/translateImage';
        return this.http.post(url, translateRequest);
    };
    TranslateService.prototype.translateAudio = function (translateRequest) {
        var url = this.config.baseServiceUrl + 'translate/translateAudio';
        return this.http.post(url, translateRequest);
    };
    TranslateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined ||
            user.username == undefined ||
            user.email == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return pattern.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/validators/passwordsMatchValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return passwordsMatchValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");

var passwordsMatchValidator = function (control) {
    var pass = control.get('password');
    var echo = control.get('passwordEcho');
    if (!pass || !echo)
        return null;
    return pass.value === echo.value ? null : { match: true };
};


/***/ }),

/***/ "./src/app/validators/usernameExistsValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = usernameExistsValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");

function usernameExistsValidator(authService) {
    return function (control) {
        var user = { name: '', username: '', email: '', password: '' };
        user.username = control.value;
        return authService.usernameExists(user).map(function (data) {
            return data.success ? { "usernameExists": true } : null;
        });
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map