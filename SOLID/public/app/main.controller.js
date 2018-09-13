'use strict'

angular.module('HomeApp').controller('mainController',['$scope','$http','$routeParams',function ($scope,$http,$routeParams)  {
    $http({
        method: 'GET',
        url: 'http://localhost:30001/newcus'
    }).then(function (success){
        $scope.userdata=success.data;
        console.log("errr");
    },function (error){
        console.log("errr");
    });
    $scope.showAlert = function(){
        $scope.mytrue = false;
        $scope.myfalse = false;
        console.log($scope.getsupsucessmsg);
        if($scope.getsupsucessmsg=="Successfully")
            $scope.mytrue = true;
        else if($scope.getsupsucessmsg=="Something Went Wrong!!!!")
            $scope.myfalse = true;
    };

    $scope.updatedata=function () {
        $http({
            method: 'PUT',
            url: 'http://localhost:30001/newcus/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'firstname': $scope.firstname,
                'lastname': $scope.lastname,
                'middlename': $scope.middlename,
                'birthday': $scope.birthday
            }
        }).then(function (success) {
            $scope.supplier = success.data;
            $scope.getsupsucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getsupsucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };
    $scope.insertdata=function () {
        $http({
            method: 'POST',
            url: 'http://localhost:30001/newcus',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'firstname': $scope.firstname,
                'lastname': $scope.lastname,
                'middlename': $scope.middlename,
                'birthday': $scope.birthday
            }
        }).then(function (success) {
            $scope.stat = success.data;
        }, function (error) {

        });
    };

}])


