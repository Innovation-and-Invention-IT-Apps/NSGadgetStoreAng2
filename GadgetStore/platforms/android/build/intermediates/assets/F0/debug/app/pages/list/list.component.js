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
var itemslist_service_1 = require("../../shared/itemsList/itemslist-service");
var config_1 = require("../../shared/config");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ListPage = (function () {
    function ListPage(_router, _itemsListService, _http) {
        this._router = _router;
        this._itemsListService = _itemsListService;
        this._http = _http;
        this.listView = true;
        this.itemsList = [];
        this.itemActionList = [];
    }
    ListPage.prototype.toggleView = function () {
        if (this.listView) {
            this.listView = false;
        }
        else {
            this.listView = true;
        }
    };
    ListPage.prototype.gotoCart = function () {
        this._router.navigate(["/cart"]);
    };
    ListPage.prototype.itemAction = function (args) {
        var _this = this;
        console.log("Item Tap Action for: " + args.index);
        if (this.itemActionList.length > 0) {
            var isItemPresent = false;
            var index = -1;
            this.itemActionList.forEach(function (selectedItem) {
                if (_this.itemsList[args.index].id === selectedItem.id) {
                    isItemPresent = true;
                    console.log("Item already existing in the list. Existing list size= " + _this.itemActionList.length);
                    index = _this.itemActionList.indexOf(selectedItem);
                    console.log("Current selected list size= " + _this.itemActionList.length);
                }
            });
            if (isItemPresent) {
                console.log("Removing item now.....");
                if (index > -1) {
                    this.itemActionList.splice(index, 1);
                }
            }
            else if (!isItemPresent) {
                console.log("Item does not exist in the list. Existing list size= " + this.itemActionList.length + ". Adding now.....");
                this.itemActionList.push(this.itemsList[args.index]);
                console.log("Current selected list size= " + this.itemActionList.length);
            }
        }
        else {
            console.log("SelectedItems List seems to be empty. Existing list size= " + this.itemActionList.length + ". Adding now.....");
            this.itemActionList.push(this.itemsList[args.index]);
            console.log("Current selected list size= " + this.itemActionList.length);
        }
    };
    ListPage.prototype.removeFromCart = function (args) {
        console.log("Item Tap Action for: " + args.index);
        this.itemActionList.splice(args.index, 1);
    };
    ListPage.prototype.processCart = function () {
        console.log("Processing Cart for USER: " + global.loggedInUser);
        console.log("Processing Cart Size: " + this.itemActionList.length);
        if ((this.itemActionList.length > 0) && (global.loggedInUser.length > 0)) {
            var response = this._itemsListService.processCart(this.itemActionList, global.loggedInUser);
            console.log("ProcessCart Service RESPONSE: " + response);
            alert("Cart Processed Successfully.");
            this.itemActionList = [];
        }
    };
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get(config_1.Config.apiUrl + "itemsList")
            .map(function (res) { return res.json(); })
            .subscribe(function (loadedItems) {
            var jsonObj = JSON.parse(loadedItems);
            jsonObj.forEach(function (item) {
                console.log("Item: name= " + item.name);
                _this.itemsList.unshift(item);
            });
            console.log("itemsList SIZE 3: " + _this.itemsList.length);
        });
    };
    ListPage = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/listview.html",
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
            providers: [itemslist_service_1.ItemsListService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, itemslist_service_1.ItemsListService, http_1.Http])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZHLGVBQWUsQ0FBQyxDQUFBO0FBRTdILGtDQUErQiwwQ0FBMEMsQ0FBQyxDQUFBO0FBRTFFLHVCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBQzNDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUU1Qyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQVN2QztJQUtFLGtCQUFvQixPQUFlLEVBQVUsaUJBQW1DLEVBQVUsS0FBVztRQUFqRixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFKckcsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFnQixFQUFFLENBQUM7SUFHakMsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxJQUFJO1FBQWYsaUJBNEJDO1FBM0JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENB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