angular.module("appModule", ['ngRoute', 'listModule', 'angularUtils.directives.dirPagination'])

    .controller("appCtrl", function ($http, $scope, usersAPI, $location) {

        $scope.loadUsers = function () {
            usersAPI.getUsers().
                then(function (res) {
                    $scope.data = res.data;
                }).catch(function (err) {
                    console.log(err);
                });
        }

        $scope.tooManyUsers;
        
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

        $scope.deleteUsers = function () {
            if ($scope.selectedUsers.result.length == 0) {
                $scope.noUserError = true;
            }
            else{
                for (let i = 0; i < $scope.selectedUsers.result.length; i++) {
                    const element = $scope.selectedUsers.result[i];
                    usersAPI.deleteUsers(element.id).then(function (response) {
                        $scope.loadUsers();
                        $location.path("/list");
                    })
                };
            }
        };

        $scope.verifyUserSelected = function (users) {
            $scope.hasUserSelected = users.some(function (user) {
                return user.selected;
            });
        };

        $scope.backToList = function () {
            $('#excluirModal').modal('toggle');
            $location.path("/list");
        }

        $scope.loadUsers();
    });
