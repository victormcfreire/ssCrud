angular.module("appModule").config(function($routeProvider){
    $routeProvider.when("/list", {
        templateUrl: "view/list.html"
    });
    $routeProvider.when("/newUser", {
        template: "<ss-newuser data='data'></ss-newuser>"
    });
    
    $routeProvider.when("/editUser/:id", {
        template: "<ss-editform data='data'></ss-editform>",
        resolve: {
            user: function (usersAPI, $route) {
                return usersAPI.getUsers($route.current.params.id);
            }
        }
    });
    //$routeProvider.otherwise({ redirectTo: "/list" })
});