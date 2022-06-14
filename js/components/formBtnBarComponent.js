function FormBtnComponentCtrl($scope, $element, $attrs, $location, usersAPI, $routeParams) {
    var ctrl = this;

    ctrl.output = function () {
        return $scope.user.name;
    }

    ctrl.addUser = function (user) {
        console.log(ctrl.scopeuser);
        
        usersAPI.saveUser(user).then(function (response) {
            //$scope.userForm.$setPristine();
            $scope.data.push(response.data);
            console.log(response.data);
            delete $scope.user;
            $location.path("/list");
        });
    }

}

angular.module("appModule").component("ssFormbtn", {
    templateUrl: "view/formBtnBar.html",
    controller: FormBtnComponentCtrl,
    bindings: {
        scopeuser: "=",
        receivingData: "=data"
    }
});