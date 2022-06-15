angular.module("appModule").factory("usersAPI", function($http){
    var _getUsers = function() {
        return $http.get("https://web-api-test1.herokuapp.com/users/all");
    };

    var _getUser = function(id) {
        return $http.get("https://web-api-test1.herokuapp.com/users/" + id);
    };

    var _editUser = function(id) {
        return $http.put("https://web-api-test1.herokuapp.com/users/" + id);
    };

    var _saveUser = function(user) {
        return $http.post("https://web-api-test1.herokuapp.com/users", user);
    };

    return { 
        getUsers: _getUsers,
        getUser: _getUser,
        editUser: _editUser,
        saveUser: _saveUser
    };
});