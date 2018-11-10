'use strict'

angular.module('HomeApp').config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'views/HighTech/HighTech.html',

        })
        .when("/HighTech", {
            templateUrl : "views/HighTech/HighTech.html",
        })

        .otherwise({
            redirectTo: 'views/HighTech/HighTech.html'
        });
}]);