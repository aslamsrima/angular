   angular.module("myApp").controller('studentController', function($scope) {
            $scope.student = {
               firstName: "Aslam",
               lastName: "Shrimali",
               fees:15000,
               fullName: function() {
                  var studentObj;
                  studentObj = $scope.student;
                  return studentObj.firstName + " " + studentObj.lastName;
               }
            };
         });