angular.module("appModule", ['ngRoute', 'listModule', 'angularUtils.directives.dirPagination'])

    .controller("appCtrl", function ($http, $scope) {

        $http.get('../data.json').
            then(function (res) {
                $scope.data = res.data;
            }).catch(function (err) {
                console.log(err);
            });

        var selectedUsers = [];

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
        
        $scope.updateSelectedUsers = function (user){
            if(user.selected){
                selectedUsers.push(user);
            }
            console.log(selectedUsers);
        }

    });