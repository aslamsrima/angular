angular.module("myApp").controller("formCtrl", function($scope) {
    $scope.master = {firstName: "", lastName: "",email:"",tel:0,gender:"",location:""};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
	$scope.validate=function(){
        if($scope.user.gender==""){
            return true;
        }
        else{
            return false;
        }
    };
    $scope.validateLocation=function(){
        if($scope.user.location==""){
            return true;
        }
        else{
            return false;
        }
    };
	$scope.reset();
	$scope.validate();
    $scope.validateLocation();
});