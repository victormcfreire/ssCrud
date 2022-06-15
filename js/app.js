angular.module("appModule", ['ngRoute', 'listModule', 'angularUtils.directives.dirPagination'])

    .controller("appCtrl", function ($http, $scope) {

        $http.get('../data.json').
            then(function (res) {
                $scope.data = res.data;
            }).catch(function (err) {
                console.log(err);
            });


        $scope.selectedUsers = {};

        $scope.selectUser = function (user) {
            console.log(user)
        }

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
                if (!user.selected) {
                    return user;
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