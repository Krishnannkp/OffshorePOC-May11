/// <reference path="../common.r.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "angularWithTS.controllers.tsDemoController", templateUrl: "/app/views/weatherService.html", controllerAs: "weatherCtrl" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        return Routes;
    }());
    Routes.$inject = ["$routeProvider"];
    angularWithTS.Routes = Routes;
})(angularWithTS || (angularWithTS = {}));
