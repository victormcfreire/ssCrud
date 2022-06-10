angular.module("appModule").factory("usersAPI", function($http){
    var _getUsers = function() {
        return $http.get("http://localhost:8080" + "#!list");
    };

    var _getUser = function(id) {
        return $http.get("http://localhost:8080" + "#!editForm/" + id);
    };

    var _saveUser = function(user) {
        return $http.post("http://localhost:8080" + "#!list", user);
    };

    return { 
        getUsers: _getUsers,
        getUser: _getUser,
        saveUser: _saveUser
    };
});