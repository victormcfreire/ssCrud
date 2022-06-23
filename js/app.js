angular
    .module("appModule", [
        'ngRoute', 
        'angularUtils.directives.dirPagination', 
        'listModule', 
        'tableModule', 
        'crudBtnBarModule', 
        'searchBarModule', 
        'newUserModule', 
        'editFormModule', 
        'formBtnBarModule'
    ])

    .controller("appCtrl", function ($scope, usersAPI, $location) {

        $scope.tooManyUsers = false;
        $scope.selectedUsers = {};
        $scope.loadUsers = loadUsers();

        function loadUsers () {
            usersAPI.getUsers().
                then(function (res) {
                    $scope.data = res.data;
                }).catch(function (err) {
                    console.log(err);
                });
        }
        
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
                $scope.noUserError = false;
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
        
        $scope.loadUsers;
        $scope.result();
    });
