import {Component, ChangeDetectionStrategy, EventEmitter, Input, Output, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Item} from "../../shared/ItemsList/item";
import {ItemsListService} from "../../shared/itemsList/itemslist-service";
import {TextField} from "ui/text-field";
import {Config} from "../../shared/config";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
//import {ListPage} from "../list/list";

@Component({
  selector: "cart",
  templateUrl: "pages/cart/cart.html",
  styleUrls: ["pages/cart/cart-common.css", "pages/cart/cart.css"]//,
  //providers: [ItemsListService]
})

export class CartPage {

  constructor(private _router: Router, private _http: Http) {
  }


  gotoListPage() {
    this._router.navigate(["/list"]);
  }
}