import {Injectable} from "@angular/core";
import {User} from "./user";
import {Item} from "../itemsList/item";
import http = require("http");
import {Http, Headers, Response} from "@angular/http";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private _http: Http) {
  }

  registrationStatus = false;
  loginStatus = false;

  registerUser(user: User){
    var that = this;
    if (!user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
    }
    console.log("INPUTS: UserID= " + user.email + ", Password= " + user.passcode);
    if(user.email != undefined && user.email != undefined){
      if(user.email.length != 0 && user.passcode.length != 0){
        if(user.email != "username@domain.name"){
          http.getJSON(Config.apiUrl + "register?loginId=" + user.email + "&password=" + user.passcode).then(
            function(response: any){
              console.log("SERVER Response: " + JSON.stringify(response));

              if(response.status === "SUCCESS"){
                that.registrationStatus = true;
                alert("User Registration Successful.....");
              } else {
                alert("Registration Failed !!!");
              }
            }, function(e){
              console.log("EEEEEEEE: " + e);
            }
          );
        }
      }else{
        alert("\"Email Address\" and \"Password\" can't be empty!!!!!");
      }
    }else{
      alert("\"Email Address\" and \"Password\" can't be empty!!!!!");
    }
  }

  getItemsList(item: Item){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.post(Config.apiUrl + "itemsList", null)
    .map(response => response.json()).catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}