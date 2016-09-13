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
var http = require("http");
var http_1 = require("@angular/http");
var config_1 = require("../config");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.registrationStatus = false;
        this.loginStatus = false;
    }
    UserService.prototype.registerUser = function (user) {
        var that = this;
        if (!user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        console.log("INPUTS: UserID= " + user.email + ", Password= " + user.passcode);
        if (user.email != undefined && user.email != undefined) {
            if (user.email.length != 0 && user.passcode.length != 0) {
                if (user.email != "username@domain.name") {
                    http.getJSON(config_1.Config.apiUrl + "register?loginId=" + user.email + "&password=" + user.passcode).then(function (response) {
                        console.log("SERVER Response: " + JSON.stringify(response));
                        if (response.status === "SUCCESS") {
                            that.registrationStatus = true;
                            alert("User Registration Successful.....");
                        }
                        else {
                            alert("Registration Failed !!!");
                        }
                    }, function (e) {
                        console.log("EEEEEEEE: " + e);
                    });
                }
            }
            else {
                alert("\"Email Address\" and \"Password\" can't be empty!!!!!");
            }
        }
        else {
            alert("\"Email Address\" and \"Password\" can't be empty!!!!!");
        }
    };
    UserService.prototype.getItemsList = function (item) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.post(config_1.Config.apiUrl + "itemsList", null)
            .map(function (response) { return response.json(); }).catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekMsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxtQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFDbkMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUcvQjtJQUNFLHFCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUcvQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFIcEIsQ0FBQztJQUtELGtDQUFZLEdBQVosVUFBYSxJQUFVO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNyRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDdEQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxzQkFBc0IsQ0FBQyxDQUFBLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNoRyxVQUFTLFFBQWE7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUU1RCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7NEJBQy9CLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO3dCQUM3QyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDO29CQUNILENBQUMsRUFBRSxVQUFTLENBQUM7d0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLENBQUMsQ0FDRixDQUFDO2dCQUNKLENBQUM7WUFDSCxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7WUFDbEUsQ0FBQztRQUNILENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLElBQVU7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRSxJQUFJLENBQUM7YUFDeEQsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFuREg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQW9EYixrQkFBQztBQUFELENBQUMsQUFuREQsSUFtREM7QUFuRFksbUJBQVcsY0FtRHZCLENBQUEifQ==