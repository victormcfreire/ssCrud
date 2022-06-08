angular.module("ssCrud").config(function($routeProvider){
    $routeProvider.when("/list", {
        templateUrl: "view/list.html"
    });
    $routeProvider.when("/newUser", {
        templateUrl: "view/newUser.html"
    });
    $routeProvider.when("/editUser", {
        templateUrl: "view/editForm.html"
    });
    $routeProvider.otherwise({ redirectTo: "/home" })
});