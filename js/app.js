angular.module("appModule", ['ngRoute', 'listModule', 'angularUtils.directives.dirPagination'])

    .controller("appCtrl", function ($http, $scope) {
        $http.get('../data.json').
        success(function (res) {
            $scope.data = res.data;
            console.log($scope.data);
        }).catch(function (err) {
            console.log(err);
        });

        $scope.deleteUsers = function (users) {
            console.log("clicou pra deletar no app.js")
            $scope.users = users.filter(function (user) {
                if (!user.selected) return user;
            });
            $scope.verifyUserSelected($scope.users);
        };

        $scope.verifyUserSelected = function (users) {
            $scope.hasUserSelected = users.some(function (user) {
              return user.selected;
            });
          };
    });