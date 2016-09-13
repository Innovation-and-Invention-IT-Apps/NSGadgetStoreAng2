"use strict";
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var cart_component_1 = require("./pages/cart/cart.component");
exports.routes = [
    { path: "", component: login_component_1.LoginPage },
    { path: "list", component: list_component_1.ListPage },
    { path: "cart", component: cart_component_1.CartPage }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVCQUE4Qiw2QkFDOUIsQ0FBQyxDQUQwRDtBQUMzRCxnQ0FBd0IsK0JBQStCLENBQUMsQ0FBQTtBQUN4RCwrQkFBdUIsNkJBQTZCLENBQUMsQ0FBQTtBQUNyRCwrQkFBdUIsNkJBQTZCLENBQUMsQ0FBQTtBQUV4QyxjQUFNLEdBQWlCO0lBQ2xDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsMkJBQVMsRUFBRTtJQUNsQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHlCQUFRLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSx5QkFBUSxFQUFFO0NBQ3RDLENBQUM7QUFFVyw0QkFBb0IsR0FBRztJQUNsQyx3QkFBZSxDQUFDLGNBQU0sRUFBRSxFQUFFLENBQUM7Q0FDNUIsQ0FBQyJ9