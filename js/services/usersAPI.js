angular.module("appModule")
    .factory("usersAPI", function($http){
    
        var _getUsers = function() {
        return $http.get("http://localhost:3000/users/all");
    };

    var _getUser = function(id) {
        return $http.get("http://localhost:3000/users/" + id);
    };

    var _editUser = function(user, id) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:3000/users/'+ id,
            data:{
                name: user.name,
                username: user.username,
                password: user.password
            }
        });
    };

    var _deleteUsers = function(id) {
        return $http.delete("http://localhost:3000/users/" + id);
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