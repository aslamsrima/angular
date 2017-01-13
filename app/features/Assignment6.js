angular.module("myApp").controller("eshopCtrl", function($scope) {
    $scope.details = [
        {OrderName:'Cloth Pair',price:1000,isChecked:false},
		{OrderName:'Pizza Combo',price:500,isChecked:false},
        {OrderName:'T-Shirt',price:845,isChecked:false},
        {OrderName:'Keyboard',price:499,isChecked:false},
		{OrderName:'Snacks',price:250,isChecked:false},
      
        ];
		$scope.pr=0;
		$scope.update=function(t){
			if(t.isChecked==true){
			$scope.pr=$scope.pr+t.price;
			}
			else{
			$scope.pr=$scope.pr-t.price;
			}
		};
		
});