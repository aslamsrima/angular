angular.module("myApp").controller("employeeCtrl", function($scope) {
    $scope.details = [
        {id:9,name:'Sayali',technology:"SQL"},
		{id:1,name:'Aslam',technology:"AngularJS"},
        {id:2,name:'Ritu',technology:"HTML"},
        {id:7,name:'Ashwini',technology:"Source Control"},
		{id:5, name:'Akshay',technology:"Java"},
        {id:3,name:'Reva',technology:"Css"}  
        
        ];
    $scope.orderByMe = function(detail) {
        $scope.myOrderBy = detail;
    }
});