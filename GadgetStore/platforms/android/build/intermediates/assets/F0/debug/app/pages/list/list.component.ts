import {Component, ChangeDetectionStrategy, EventEmitter, Input, Output, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Item} from "../../shared/ItemsList/item";
import {ItemsListService} from "../../shared/itemsList/itemslist-service";
import {TextField} from "ui/text-field";
import {Config} from "../../shared/config";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Component({
  selector: "list",
  templateUrl: "pages/list/listview.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [ItemsListService]
})

export class ListPage implements OnInit {
  listView = true;
  itemsList: Array<Item> = [];
  itemActionList: Array<Item> = [];

  constructor(private _router: Router, private _itemsListService: ItemsListService, private _http: Http) {
  }

  toggleView() {
    if(this.listView) {
      this.listView = false;
    }else{
      this.listView = true;
    }
  }

  gotoCart() {
    this._router.navigate(["/cart"]);
  }

  itemAction(args) {
    console.log("Item Tap Action for: " + args.index);
    if(this.itemActionList.length > 0){
      var isItemPresent = false;
      var index = -1;
      this.itemActionList.forEach((selectedItem) =>{
        if(this.itemsList[args.index].id === selectedItem.id){
          isItemPresent = true;
          console.log("Item already existing in the list. Existing list size= " + this.itemActionList.length);
          index = this.itemActionList.indexOf(selectedItem);
          console.log("Current selected list size= " + this.itemActionList.length);
        }
      });
      if(isItemPresent){
        console.log("Removing item now.....");
          if (index > -1) {
            this.itemActionList.splice(index, 1);
          }
      }else if(!isItemPresent){
        console.log("Item does not exist in the list. Existing list size= " + this.itemActionList.length + ". Adding now.....");
        this.itemActionList.push(this.itemsList[args.index]);
        console.log("Current selected list size= " + this.itemActionList.length);
      }
    }else{
      console.log("SelectedItems List seems to be empty. Existing list size= " + this.itemActionList.length + ". Adding now.....");
      this.itemActionList.push(this.itemsList[args.index]);
      console.log("Current selected list size= " + this.itemActionList.length);
    }
  }

  removeFromCart(args) {
    console.log("Item Tap Action for: " + args.index);
    this.itemActionList.splice(args.index, 1);
  }

  processCart() {
    console.log("Processing Cart for USER: " + global.loggedInUser);
    console.log("Processing Cart Size: " + this.itemActionList.length);
    if((this.itemActionList.length > 0) && (global.loggedInUser.length > 0)){
      var response = this._itemsListService.processCart(this.itemActionList, global.loggedInUser);
      console.log("ProcessCart Service RESPONSE: " + response);
        alert("Cart Processed Successfully.");
      this.itemActionList = [];
      //this._router.navigate(["/cart"]);
    }
  }

  ngOnInit() {
    this._http.get(Config.apiUrl + "itemsList")
    .map(res => res.json())
    .subscribe(loadedItems => {
      let jsonObj = JSON.parse(loadedItems);
      jsonObj.forEach((item) => {
        console.log("Item: name= " + item.name);
        this.itemsList.unshift(item);
      });
      console.log("itemsList SIZE 3: " + this.itemsList.length);
    });
  }
}