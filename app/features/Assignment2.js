
angular.module("myApp").service("Calculator", function () {
    this.square = function (a) { return a*a};
	this.cube=function(a){return a*a*a};
	this.factorial=function(a){
		if (a < 0) {
			return -1;
		}
		else if (a == 0) {
			return 1;
		}
		else {
			return (a * this.factorial(a - 1));
		}
	}
});
angular.module("myApp").controller("CalculatorController", function ($scope, Calculator) {
    $scope.number=5;
    $scope.findSquare = function () {
        $scope.answer = Calculator.square($scope.number);
    }
	$scope.findCube = function () {
        $scope.answer = Calculator.cube($scope.number);
    }
	$scope.findFactorial = function () {
        $scope.answer = Calculator.factorial($scope.number);
    }
});
