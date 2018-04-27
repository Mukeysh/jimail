webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.onSubmit = function (title, body) {
        console.log(title, body);
        window.localStorage.setItem('subject', title);
        window.localStorage.setItem('body', body);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/mukeysh/Desktop/new-card/src/pages/user/user.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form>\n    <ion-item>\n      <ion-label floating>Subject</ion-label>\n      <ion-input type="text" #titleInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Body</ion-label>\n      <ion-input type="textarea" #bodyInput></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button block color="secondary" (click)=\'onSubmit(titleInput.value,bodyInput.value)\'>\n          Submit\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/mukeysh/Desktop/new-card/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/user/user.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tesseract_js__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tesseract_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tesseract_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, camera, emailComposer, sanitizer, loadingCtrl, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.emailComposer = emailComposer;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
    }
    HomePage.prototype.navigateToAnotherModule = function () {
        this.navCtrl.push('UserPage');
    };
    HomePage.prototype.sanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    HomePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 100,
            targetWidth: 350,
            targetHeight: 200,
            allowEdit: true,
            saveToPhotoAlbum: true
            //encodingType: Camera.EncodingType.PNG,
        };
        this.camera.getPicture(options).then(function (imageURI) {
            /*this.image = this.sanitizeUrl(imageURI);*/
            _this.image = "data:image/jpeg;base64," + imageURI;
            _this.attachImage = 'base64:icon.png//' + imageURI;
            //this.checkImage();
            //this.sendEmail();
        }, function (err) {
            console.log('Image error: ', err);
        });
    };
    HomePage.prototype.checkImage = function () {
        var img = document.getElementsByTagName('img')[0];
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Processing Image",
        });
        //var textEmail;
        //alert(img);
        /*Tesseract.create({
          workerPath: '../../node_modules/tesseract.js/browser/worker.js',
          langPath: '../../www/assets/tesseract/langs/',
          corePath: '../../node_modules/tesseract.js/src/index.js'
        });*/
        __WEBPACK_IMPORTED_MODULE_2_tesseract_js___default.a.recognize(img, {
            lang: 'eng'
        })
            .progress(function (message) {
            loader.present();
            console.log(message);
        })
            .catch(function (error) {
            var alert = that.alertCtrl.create({
                title: error,
                buttons: ['OK']
            });
            alert.present();
        })
            .then(function (result) {
            that.textEmail = result.text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
            loader.dismiss();
            console.log(result);
            console.log(that.textEmail);
            var alert = that.alertCtrl.create({
                title: 'Email Found',
                subTitle: that.textEmail,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    HomePage.prototype.sendEmail = function () {
        var _this = this;
        console.log(window.localStorage.getItem('subject'));
        var email = {
            to: this.textEmail,
            cc: 'mukeysh@gai.co.in',
            attachments: [this.attachImage],
            subject: window.localStorage.getItem('subject'),
            body: window.localStorage.getItem('body'),
            isHtml: true
        };
        this.emailComposer.open(email);
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
        })
            .catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mukeysh/Desktop/new-card/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home" padding>\n  <ion-card>\n    <ion-card-content>\n      Click below and take a picture of visiting card1.\n      <button ion-button full (click)="takePicture()">\n        <ion-icon name="md-camera"></ion-icon> Take a Picture\n      </button>\n      <button ion-button full (click)="checkImage()">Read Image</button>\n      <button ion-button full (click)="sendEmail()">Send Email</button>\n      <p *ngIf="image">Picture</p>\n      <img [src]="image" *ngIf="image" />\n      <!-- <img src="../../assets/imgs/image2.jpg"> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/mukeysh/Desktop/new-card/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_user__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'User', component: __WEBPACK_IMPORTED_MODULE_5__pages_user_user__["a" /* UserPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mukeysh/Desktop/new-card/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/mukeysh/Desktop/new-card/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map