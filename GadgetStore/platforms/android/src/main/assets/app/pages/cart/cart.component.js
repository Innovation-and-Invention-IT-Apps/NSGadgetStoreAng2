"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
//import {ListPage} from "../list/list";
var CartPage = (function () {
    function CartPage(_router, _http) {
        this._router = _router;
        this._http = _http;
    }
    CartPage.prototype.gotoListPage = function () {
        this._router.navigate(["/list"]);
    };
    CartPage = __decorate([
        core_1.Component({
            selector: "cart",
            templateUrl: "pages/cart/cart.html",
            styleUrls: ["pages/cart/cart-common.css", "pages/cart/cart.css"] //,
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], CartPage);
    return CartPage;
}());
exports.CartPage = CartPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZHLGVBQWUsQ0FBQyxDQUFBO0FBSzdILHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUU1Qyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2Qyx3Q0FBd0M7QUFTeEM7SUFFRSxrQkFBb0IsT0FBZSxFQUFVLEtBQVc7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07SUFDeEQsQ0FBQztJQUdELCtCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUMsQ0FBQSxHQUFHO1NBRXBFLENBQUM7O2dCQUFBO0lBV0YsZUFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksZ0JBQVEsV0FTcEIsQ0FBQSJ9