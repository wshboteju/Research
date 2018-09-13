'use strict'

angular.module('HomeApp').config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'views/home.html',

        })
        .when("/HighTech", {
            templateUrl : "views/HighTech/HighTech.html",
        })
        .when("/Exterior", {
            templateUrl : "views/ExteriorHome/Exterior.html",
        })
        .when("/Interior", {
            templateUrl : "views/InteriorHome/Interior.html",
        })
        .when("/Security", {
            templateUrl : "views/Security/Security.html",
        })
        .otherwise({
            redirectTo: 'views/home.html'
        });
}]);