/// <reference path="../../common.r.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var controllers;
    (function (controllers) {
        var TSDemoController = (function () {
            function TSDemoController() {
                var _this = this;
                this.getFavourites = function (term) {
                    return _this.weatherService.search(term);
                };
            }
            return TSDemoController;
        }());
        controllers.TSDemoController = TSDemoController;
        angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
    })(controllers = angularWithTS.controllers || (angularWithTS.controllers = {}));
})(angularWithTS || (angularWithTS = {}));
