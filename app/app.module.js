/// <reference path="../common.r.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
(function () {
    var app = angular.module("angularWithTS", ['ngRoute']);
    app.config(angularWithTS.Routes.configureRoutes);
})();
