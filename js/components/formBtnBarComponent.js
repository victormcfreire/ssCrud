function FormBtnComponentCtrl($scope, $element, $attrs, $location, usersAPI, $routeParams) {
    var ctrl = this;

    ctrl.addUser = function (user) {
        usersAPI.saveUser(user).then(function (response) {
            //$scope.userForm.$setPristine();
            ctrl.receivingData.push(ctrl.scopeuser);
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