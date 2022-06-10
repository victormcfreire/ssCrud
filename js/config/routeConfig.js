angular.module("appModule").config(function($routeProvider){
    $routeProvider.when("/list", {
        templateUrl: "view/list.html"
    });
    $routeProvider.when("/newUser", {
        templateUrl: "view/newUser.html"
    });
    $routeProvider.when("/editUser", {
        templateUrl: "view/editForm.html"
    });
    $routeProvider.when("/editUser/:id", {
        templateUrl: "view/editForm.html",
        resolve: {
            user: function (usersAPI, $route) {
                return usersAPI.getUsers($route.current.params.id);
            }
        }
    });
    $routeProvider.otherwise({ redirectTo: "/list" })
});