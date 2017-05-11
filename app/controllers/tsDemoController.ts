/// <reference path="../../common.r.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
namespace angularWithTS.controllers {

 export class TSDemoController {
public searchTerm: string;       
private weatherService: angularWithTS.Services.weatherService;  

// While running weatherService is undefined
public getFavourites = ( term: string ) => {
            return this.weatherService.search( term );
        }
    }
    angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
} 