angular.module("appModule").factory("usersAPI", function($http){
    var _getUsers = function() {
        return $http.get("http://localhost:8080/index.html" + "#/list");
    };

    var _getUser = function(id) {
        return $http.get("http://localhost:8080/index.html" + "/editUser/" + id);
    };

    var _saveUser = function(user) {
        return $http.post("http://localhost:3412" + "/list", user);
    };

    return { 
        getUsers: _getUsers,
        getUser: _getUser,
        saveUser: _saveUser
    };
});