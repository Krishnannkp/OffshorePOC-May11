/// <reference path="../common.r.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
namespace angularWithTS {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "angularWithTS.controllers.tsDemoController", templateUrl: "/app/views/weatherService.html", controllerAs: "weatherCtrl" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}