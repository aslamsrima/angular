var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/Assignment1", {
        templateUrl : "features/Assignment1.html"
        
    })
    .when("/Assignment2",{
        templateUrl:"features/Assignment2.html",
        controller:"CalculatorController"
    })
    .when("/Assignment3",{
        templateUrl:"features/Assignment3.html",
        controller:"employeeCtrl"
    })
    .when("/Assignment4",{
        templateUrl:"features/Assignment4.html",
        controller:"studentController"
    })
    .when("/Assignment5",{
        templateUrl:"features/Assignment5.html",
        controller:"formCtrl"
    })
    .when("/Assignment6",{
        templateUrl:"features/Assignment6.html",
        controller:"eshopCtrl"
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected,</p>"
    });
   
}]);
