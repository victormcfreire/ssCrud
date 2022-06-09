angular.module("ssCrud", [])

.controller("ssCrudCtrl", function($scope){
    $scope.app = "ssCRUD";

    $scope.users = [];
    
    $scope.verifyUserSelected = function(users){
        $scope.hasUserSelected = users.some(function (user) {
            return user.selected;
        });
    };
});