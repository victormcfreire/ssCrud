angular.module("appModule", ['ngRoute', 'angularUtils.directives.dirPagination'])

    .controller("appCtrl", function ($scope, usersAPI, $location) {

        $scope.loadUsers = function () {
            usersAPI.getUsers().
                then(function (res) {
                    $scope.data = res.data;
                }).catch(function (err) {
                    console.log(err);
                });
        }

        $scope.tooManyUsers = false;
        
        $scope.selectedUsers = {};
        
        $scope.result = function (data) {
            $scope.selectedUsers.result = [];
            angular.forEach(data, function (value) {
                if (value.selected) {
                    $scope.selectedUsers.result.push(value);
                    return $scope.selectedUsers.result;
                }
            })
        }

        $scope.deleteUsers = function (users) {
            if (users.length == 0) {
                $scope.noUserError = true;
            }
            else{
                for (let i = 0; i < users.length; i++) {
                    const element = users[i];
                    usersAPI.deleteUsers(element.id).then(function (response) {
                        $scope.loadUsers();
                        $location.path("/list");
                    })
                };
            }
        };

        $scope.backToList = function () {
            $('#excluirModal').modal('toggle');
            $location.path("/list");
        }
        
        $scope.result();
        $scope.loadUsers();
    });
