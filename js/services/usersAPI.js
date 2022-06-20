angular.module("appModule").factory("usersAPI", function($http){
    var _getUsers = function() {
        return $http.get("http://localhost:3000/users/all");
    };

    var _getUser = function(id) {
        return $http.get("http://localhost:3000/users/" + id);
    };

    var _editUser = function(id) {
        return $http({
            method: 'OPTIONS',
            url: 'http://localhost:3000/users/' + id,
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'PUT, GET, DELETE, POST, PATCH, OPTIONS'
            }
        });
    };

    var _deleteUsers = function(id) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3000/users/' + id,
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'PUT, GET, DELETE, POST, PATCH, OPTIONS'
            }
        });
    };

    var _saveUser = function(user) {
        return $http.post("http://localhost:3000/users", user);
    };

    return { 
        getUsers: _getUsers,
        getUser: _getUser,
        editUser: _editUser,
        deleteUsers: _deleteUsers,
        saveUser: _saveUser
    };
});