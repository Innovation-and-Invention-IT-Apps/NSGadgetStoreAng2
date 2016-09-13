"use strict";
var status_bar_util_1 = require("./utils/status-bar-util");
require("reflect-metadata");
var application_1 = require("nativescript-angular/application");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
status_bar_util_1.setStatusBarColors();
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [http_1.NS_HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQiw0QkFBb0Msa0NBQWtDLENBQUMsQ0FBQTtBQUN2RSxxQkFBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QywyQkFBbUMsY0FBYyxDQUFDLENBQUE7QUFFbEQsb0NBQWtCLEVBQUUsQ0FBQztBQUNyQixtQ0FBcUIsQ0FBQyw0QkFBWSxFQUFFLENBQUMsd0JBQWlCLEVBQUUsaUNBQW9CLENBQUMsQ0FBQyxDQUFDIn0=