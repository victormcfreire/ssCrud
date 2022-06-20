angular.module("appModule", ['ngRoute', 'listModule', 'angularUtils.directives.dirPagination'])

    .controller("appCtrl", function ($http, $scope, usersAPI, $location) {

        $http.get('http://localhost:3000/users/all').
            then(function (res) {
                $scope.data = res.data;
            }).catch(function (err) {
                console.log(err);
            });

        $scope.selectedUsers = {};

        $scope.result = function () {
            $scope.selectedUsers.result = []
            angular.forEach($scope.data, function (value) {
                if (value.selected) {
                    $scope.selectedUsers.result.push(value);
                    return $scope.selectedUsers.result;
                }
            })
        }

        $scope.deleteUsers = function (users) {
            $scope.data = users.filter(function (user) {
                if (user.selected) {
                    usersAPI.deleteUsers(user.id).then(function (response){
                        $location.path("/list");
                    })
                }
            });
            $scope.verifyUserSelected($scope.data);
        };

        $scope.verifyUserSelected = function (users) {
            $scope.hasUserSelected = users.some(function (user) {
                return user.selected;
            });
        };
    });
    