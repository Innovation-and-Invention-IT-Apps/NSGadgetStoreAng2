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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http = require("http");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var config_1 = require("../../shared/config");
var LoginPage = (function () {
    function LoginPage(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.loginStatus = false;
        this.user = new user_1.User();
        //this.user.email = "username@domain.name";
        //this.user.passcode = "password";
    }
    LoginPage.prototype.validateLogin = function () {
        var that = this;
        var email = this.user.email;
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        console.log("INPUTS: UserID= '" + this.user.email + "', Password= '" + this.user.passcode + "'");
        if (this.user.email != undefined && this.user.email != undefined) {
            if (this.user.email.length != 0 && this.user.email.length != 0) {
                if (this.user.email != "username@domain.name") {
                    http.getJSON(config_1.Config.apiUrl + "login?loginId=" + this.user.email + "&password=" + this.user.passcode).then(function (response) {
                        console.log("SERVER Response: " + JSON.stringify(response));
                        if (response.status === "TRUE") {
                            that.loginStatus = true;
                            global.loggedInUser = email;
                            that._router.navigate(["/list"]);
                        }
                        else {
                            global.loggedInUser = "";
                            alert("!!! Login Failed. Please check your credentials. Sign Up instead...");
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
    LoginPage.prototype.login = function () {
        console.log("LOGIN SUCCESSFUL. NOW FETCHING ITEMS LIST.....");
        /*this._userService.getItemsList(new Item(null,null,null,null))
        .subscribe(
          () => this._router.navigate(["/list"]),
          (error) => alert("Unfortunately we could not find your account.")
        );*/
        this._router.navigate(["/list"]);
    };
    LoginPage.prototype.signUp = function () {
        this._userService.registerUser(this.user);
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFFNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QsdUJBQXFCLHFCQUFxQixDQUFDLENBQUE7QUFTM0M7SUFLRSxtQkFBb0IsT0FBZSxFQUFVLFlBQXlCO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUZ0RSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUdsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsMkNBQTJDO1FBQzNDLGtDQUFrQztJQUNwQyxDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQy9ELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzdELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLHNCQUFzQixDQUFDLENBQUEsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdkcsVUFBUyxRQUFhO3dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFFNUQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQSxDQUFDOzRCQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs0QkFDeEIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7NEJBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixNQUFNLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs0QkFDekIsS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7d0JBQy9FLENBQUM7b0JBQ0gsQ0FBQyxFQUFFLFVBQVMsQ0FBQzt3QkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUNGLENBQUM7Z0JBQ0osQ0FBQztZQUNILENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSixLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztZQUNsRSxDQUFDO1FBQ0gsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQzlEOzs7O1lBSUk7UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQWxFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDckUsQ0FBQzs7aUJBQUE7SUE4REYsZ0JBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBNURZLGlCQUFTLFlBNERyQixDQUFBIn0=