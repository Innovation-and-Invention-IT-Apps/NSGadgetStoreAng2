import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../config";
import {Item} from "./item";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import http = require("http");
import {User} from "../user/user";

@Injectable()
export class ItemsListService {
  private allItems: Array<Item> = [];

  constructor(private _http: Http) {}

  processCart(cart: Array<Item>, email) {
    var status = "";
    var cartString = "";
    cart.forEach((item) => {
      console.log("Inside FOREACH.....");
      cartString += "Item ID: " + item.id + ", Item Name: " + item.name + ", Item Price: USD " + item.price + ".00\n";
    });
    console.log("CART STRING: " + cartString + "\nEMAIL: " + email);
    console.log("ENCODED URL: " + encodeURI(Config.apiUrl + "processCart?Cart=" + cartString + "&email=" + email));
    status = JSON.stringify(http.getJSON(encodeURI(Config.apiUrl + "processCart?Cart=" + cartString + "&email=" + email)));

    console.log("STATUS: " + status);
    return status;
  }

  load() {
    return this._http.get(Config.apiUrl + "itemsList");
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}