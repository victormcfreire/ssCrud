angular.module("appModule", ['ngRoute', 'listModule', 'angularUtils.directives.dirPagination'])

    .controller("appCtrl", function ($http, $scope) {
        $http.get('../data.json').
        success(function (res) {
            $scope.data = res.data;
            console.log($scope.data);
        }).catch(function (err) {
            console.log(err);
        });

        console.log(search)
    });