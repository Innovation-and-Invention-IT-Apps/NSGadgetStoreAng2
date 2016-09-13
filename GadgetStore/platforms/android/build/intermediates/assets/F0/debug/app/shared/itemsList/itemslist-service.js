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
var config_1 = require("../config");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var http = require("http");
var ItemsListService = (function () {
    function ItemsListService(_http) {
        this._http = _http;
        this.allItems = [];
    }
    ItemsListService.prototype.processCart = function (cart, email) {
        var status = "";
        var cartString = "";
        cart.forEach(function (item) {
            console.log("Inside FOREACH.....");
            cartString += "Item ID: " + item.id + ", Item Name: " + item.name + ", Item Price: USD " + item.price + ".00\n";
        });
        console.log("CART STRING: " + cartString + "\nEMAIL: " + email);
        console.log("ENCODED URL: " + encodeURI(config_1.Config.apiUrl + "processCart?Cart=" + cartString + "&email=" + email));
        status = JSON.stringify(http.getJSON(encodeURI(config_1.Config.apiUrl + "processCart?Cart=" + cartString + "&email=" + email)));
        console.log("STATUS: " + status);
        return status;
    };
    ItemsListService.prototype.load = function () {
        return this._http.get(config_1.Config.apiUrl + "itemsList");
    };
    ItemsListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ItemsListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ItemsListService);
    return ItemsListService;
}());
exports.ItemsListService = ItemsListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXNsaXN0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtc2xpc3Qtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1Qyx1QkFBcUIsV0FBVyxDQUFDLENBQUE7QUFFakMsbUJBQXlCLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixJQUFPLElBQUksV0FBVyxNQUFNLENBQUMsQ0FBQztBQUk5QjtJQUdFLDBCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUZ2QixhQUFRLEdBQWdCLEVBQUUsQ0FBQztJQUVELENBQUM7SUFFbkMsc0NBQVcsR0FBWCxVQUFZLElBQWlCLEVBQUUsS0FBSztRQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxVQUFVLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbEgsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxVQUFVLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLG1CQUFtQixHQUFHLFVBQVUsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLG1CQUFtQixHQUFHLFVBQVUsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTVCSDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBNkJiLHVCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSx3QkFBZ0IsbUJBNEI1QixDQUFBIn0=