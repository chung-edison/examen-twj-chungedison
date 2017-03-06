webpackJsonp([1,4],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterURLService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterURLService = (function () {
    function MasterURLService() {
        //this._url = "http://localhost:1337/";
        this._url = "https://examen-twj-chungedison-chungedison.c9users.io/";
    }
    Object.defineProperty(MasterURLService.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (nuevoUrl) {
            this._url = nuevoUrl;
        },
        enumerable: true,
        configurable: true
    });
    MasterURLService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MasterURLService);
    return MasterURLService;
}());
//# sourceMappingURL=master-url.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodegaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodegaComponent = (function () {
    function BodegaComponent(_http, _masterURL) {
        this._http = _http;
        this._masterURL = _masterURL;
        this.title = 'Lista de Bodegas';
        this.nuevaBodega = {};
        this.bodegas = [];
        this.disabledButtons = {
            nuevaBodegaFormButton: false
        };
    }
    ;
    BodegaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get(this._masterURL.url + "Bodega")
            .subscribe(function (res) {
            console.log(res.json());
            _this.bodegas = res.json()
                .map(function (value) {
                value.cerrado = true;
                return value;
            });
        }, function (err) {
            console.log(err);
        });
    };
    BodegaComponent.prototype.crearBodega = function (formulario) {
        var _this = this;
        this.disabledButtons.nuevaBodegaFormButton = true;
        this._http.post(this._masterURL.url + "Bodega", {
            nombre: formulario.value.nombre,
            direccion: formulario.value.direccion,
            capacidadEnToneladas: formulario.value.capacidadEnToneladas
        }).subscribe(function (res) {
            var bodegaCreada = res.json();
            bodegaCreada.cerrado = true;
            _this.bodegas.push(bodegaCreada);
            _this.nuevaBodega = {};
            _this.disabledButtons.nuevaBodegaFormButton = false;
        }, function (err) {
            _this.disabledButtons.nuevaBodegaFormButton = false;
            console.log("Ocurrió un error", err);
        });
    };
    BodegaComponent.prototype.borrarBodega = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + "Bodega/" + id).subscribe(function (res) {
            var bodegaBorrada = res.json();
            _this.bodegas = _this.bodegas.filter(function (value) { return bodegaBorrada.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    BodegaComponent.prototype.actualizarBodega = function (bodega) {
        var parameters = {
            nombre: bodega.nombre,
            direccion: bodega.direccion,
            capacidadEnToneladas: bodega.capacidadEnToneladas
        };
        this._http.put(this._masterURL.url + "Bodega/" + bodega.id, parameters)
            .subscribe(function (res) {
            bodega.cerrado = !bodega.cerrado;
        }, function (err) {
            console.log(err);
        });
    };
    BodegaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-bodega',
            template: __webpack_require__(516),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__["a" /* MasterURLService */]) === 'function' && _b) || Object])
    ], BodegaComponent);
    return BodegaComponent;
    var _a, _b;
}());
//# sourceMappingURL=bodega.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(517),
            styles: [__webpack_require__(512)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemComponent = (function () {
    function ItemComponent(_ActivatedRoute, _http, _masterURL) {
        this._ActivatedRoute = _ActivatedRoute;
        this._http = _http;
        this._masterURL = _masterURL;
        this.title = 'Lista de Items';
        this.nuevoItem = {};
        this.bodega = {};
        this.items = [];
        this.disabledButtons = {
            nuevoItemFormButton: false
        };
    }
    ;
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ActivatedRoute
            .params
            .subscribe(function (parametros) {
            _this._params = parametros;
            _this._http.get(_this._masterURL.url + 'Item?idBodega=' + _this._params.idBodega)
                .subscribe(function (res) {
                console.log(res.json());
                _this.items = res.json()
                    .map(function (value) {
                    value.cerrado = true;
                    return value;
                });
            }, function (err) {
                console.log(err);
            });
        });
        this._http.get(this._masterURL.url + 'Bodega/' + this._params.idBodega)
            .subscribe(function (res) {
            console.log(res.json());
            _this.bodega = res.json();
        }, function (err) {
            console.log(err);
        });
    };
    ItemComponent.prototype.crearItem = function (formulario) {
        var _this = this;
        this.disabledButtons.nuevoItemFormButton = true;
        this._http.post(this._masterURL.url + "Item", {
            nnombre: formulario.value.nombre,
            cantidad: formulario.value.cantidad,
            peso: formulario.value.peso,
            idBodega: this._params.idBodega
        }).subscribe(function (res) {
            var itemCreado = res.json();
            itemCreado.cerrado = true;
            _this.items.push(itemCreado);
            _this.nuevoItem = {};
            _this.disabledButtons.nuevoItemFormButton = false;
        }, function (err) {
            _this.disabledButtons.nuevoItemFormButton = false;
            console.log("Ocurrió un error", err);
        });
    };
    ItemComponent.prototype.borrarItem = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + "Item/" + id).subscribe(function (res) {
            var itemBorrado = res.json();
            _this.items = _this.items.filter(function (value) { return itemBorrado.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    ItemComponent.prototype.actualizarItem = function (item) {
        var parameters = {
            nombre: item.nombre,
            cantidad: item.cantidad,
            peso: item.peso
        };
        this._http.put(this._masterURL.url + "Item/" + item.id, parameters)
            .subscribe(function (res) {
            item.cerrado = !item.cerrado;
        }, function (err) {
            console.log(err);
        });
    };
    ItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-item',
            template: __webpack_require__(518),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__["a" /* MasterURLService */]) === 'function' && _c) || Object])
    ], ItemComponent);
    return ItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(456);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(515),
            styles: [__webpack_require__(510)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_master_url_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bodega_bodega_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_item_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bodega_bodega_component__["a" /* BodegaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_master_url_service__["a" /* MasterURLService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bodega_bodega_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(305);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'bodegas', component: __WEBPACK_IMPORTED_MODULE_1__bodega_bodega_component__["a" /* BodegaComponent */] },
    { path: 'bodegas/:idBodega/items', component: __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n              data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/inicio']\">Bodegas</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/bodegas']\">Listar Bodegas</a></li>\n        <li><a [routerLink]=\"['/bodegas/1/items']\">Listar Items</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>{{title}}</h1>\n  <form class=\"animated fadeIn\" (ngSubmit)=\"crearBodega(nuevaBodegaForm)\" #nuevaBodegaForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label>Nombre de la bodega:</label>\n      <input required type=\"text\" class=\"form-control\" placeholder=\"Bodega\" name=\"nombre\"\n             [(ngModel)]=\"nuevaBodega.nombre\"\n             #nombre=\"ngModel\"\n             #nombreElm>\n    </div>\n    <div class=\"form-group\">\n      <label>Dirección de la bodega:</label>\n      <input required type=\"text\" class=\"form-control\" placeholder=\"Dirección\" name=\"direccion\"\n             [(ngModel)]=\"nuevaBodega.direccion\"\n             #direccion=\"ngModel\"\n             #direccionElm>\n    </div>\n    <div class=\"form-group\">\n      <label>Capacidad de la bodega (en toneladas):</label>\n      <input required type=\"number\" class=\"form-control\" min=\"0\" name=\"capacidadEnToneladas\"\n             [(ngModel)]=\"nuevaBodega.capacidadEnToneladas\"\n             #capacidadEnToneladas=\"ngModel\"\n             #capacidadEnToneladasElm>\n    </div>\n    <button [disabled]=\"!nuevaBodegaForm.valid\" type=\"submit\"\n            class=\"btn btn-block btn-success\">Registrar Bodega\n    </button>\n  </form>\n  <br>\n  <div *ngFor=\"let bodega of bodegas\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <h4><b>Bodega:</b> {{bodega.nombre}}</h4>\n        <h4><b>Dirección:</b> {{bodega.direccion}}</h4>\n        <h4><b>Capacidad (en toneladas):</b> {{bodega.capacidadEnToneladas}}</h4>\n      </div>\n      <div class=\"col-sm-2\">\n        <a class=\"btn btn-block btn-warning\" [routerLink]=\"[bodega.id,'items']\">Ver Items</a>\n      </div>\n      <div class=\"col-sm-2\">\n        <button class=\"btn btn-block btn-info\" (click)=\"bodega.cerrado = !bodega.cerrado\">Editar</button>\n        <button class=\"btn btn-block btn-danger\" (click)=\"borrarBodega(bodega.id)\">Borrar</button>\n      </div>\n    </div>\n    <div [hidden]=\"bodega.cerrado\">\n      <form class=\"animated fadeIn\" (ngSubmit)=\"actualizarBodega(bodega)\" #nuevaBodegaForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Nombre de la bodega:</label>\n          <input required type=\"text\" class=\"form-control\" name=\"nombre\"\n                 [(ngModel)]=\"bodega.nombre\"\n                 #nombre=\"ngModel\"\n                 #nombreElm>\n        </div>\n        <div class=\"form-group\">\n          <label>Dirección de la bodega:</label>\n          <input required type=\"text\" class=\"form-control\" name=\"direccion\"\n                 [(ngModel)]=\"bodega.direccion\"\n                 #direccion=\"ngModel\"\n                 #direccionElm>\n        </div>\n        <div class=\"form-group\">\n          <label>Capacidad de la bodega (en toneladas):</label>\n          <input required type=\"number\" class=\"form-control\" min=\"0\" name=\"capacidadEnToneladas\"\n                 [(ngModel)]=\"bodega.capacidadEnToneladas\"\n                 #capacidadEnToneladas=\"ngModel\"\n                 #capacidadEnToneladasElm>\n        </div>\n        <button [disabled]=\"disabledButtons.nuevaBodegaFormButton||!nuevaBodegaForm.valid\" type=\"submit\"\n                class=\"btn btn-block btn-success\">Actualizar Registro\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-block btn-warning\"\n                (click)=\"bodega.cerrado = !bodega.cerrado\">\n          Cancelar\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Bodegas</h1>\n    <p>Examen de Tecnologías Web con JavaScript</p>\n    <p>Semestre 2016-B</p>\n    <p><a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/bodegas']\" role=\"button\">Ver Bodegas</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>{{title}} en la bodega - {{bodega.nombre}}</h1>\n  <form class=\"animated fadeIn\" (ngSubmit)=\"crearItem(nuevoItemForm)\" #nuevoItemForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label>Nombre del item:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Item\" name=\"nombre\"\n             [(ngModel)]=\"nuevoItem.nombre\"\n             #nombre=\"ngModel\"\n             #nombreElm>\n    </div>\n    <div class=\"form-group\">\n      <label>Cantidad:</label>\n      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"cantidad\"\n             [(ngModel)]=\"nuevoItem.cantidad\"\n             #cantidad=\"ngModel\"\n             #cantidadElm>\n    </div>\n    <div class=\"form-group\">\n      <label>Peso:</label>\n      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"peso\"\n             [(ngModel)]=\"nuevoItem.peso\"\n             #peso=\"ngModel\"\n             #pesoElm>\n    </div>\n    <button [disabled]=\"!nuevoItemForm.valid\" type=\"submit\"\n            class=\"btn btn-block btn-success\">Registrar Item\n    </button>\n  </form>\n\n  <br>\n  <div *ngFor=\"let item of items\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <h4><b>Item:</b> {{item.nnombre}}</h4>\n        <h4><b>Cantidad:</b> {{item.cantidad}}</h4>\n        <h4><b>Peso:</b> {{item.peso}}</h4>\n      </div>\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-2\">\n        <button class=\"btn btn-block btn-info\" (click)=\"item.cerrado = !item.cerrado\">Editar</button>\n        <button class=\"btn btn-block btn-danger\" (click)=\"borrarItem(item.id)\">Borrar</button>\n      </div>\n    </div>\n    <div [hidden]=\"item.cerrado\">\n      <form class=\"animated fadeIn\" (ngSubmit)=\"actualizarItem(item)\" #nuevoItemForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Nombre del item:</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Item\" name=\"nombre\"\n                 [(ngModel)]=\"item.nnombre\"\n                 #nombre=\"ngModel\"\n                 #nombreElm>\n        </div>\n        <div class=\"form-group\">\n          <label>Cantidad:</label>\n          <input type=\"number\" class=\"form-control\" min=\"0\" name=\"cantidad\"\n                 [(ngModel)]=\"item.cantidad\"\n                 #cantidad=\"ngModel\"\n                 #cantidadElm>\n        </div>\n        <div class=\"form-group\">\n          <label>Peso:</label>\n          <input type=\"number\" class=\"form-control\" min=\"0\" name=\"peso\"\n                 [(ngModel)]=\"item.peso\"\n                 #peso=\"ngModel\"\n                 #pesoElm>\n        </div>\n        <button [disabled]=\"disabledButtons.nuevoItemFormButton||!nuevoItemForm.valid\" type=\"submit\"\n                class=\"btn btn-block btn-success\">Actualizar Item\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-block btn-warning\"\n                (click)=\"item.cerrado = !item.cerrado\">\n          Cancelar\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[536]);
//# sourceMappingURL=main.bundle.js.map