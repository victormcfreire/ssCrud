function FormBtnComponentCtrl($scope, $element, $attrs, $location, usersAPI, $routeParams) {
    var ctrl = this;

    $scope.contato = $scope.data;

    ctrl.addUser = function () {
        console.log("adicionou no form component");
    }

    ctrl.output = function () {
        return $scope.user.name;
    }


    ctrl.addUser = function (user) {
        usersAPI.saveUser(user).then(function (response) {
            delete $scope.user;
            $scope.userForm.$setPristine();
            $scope.user.push(response.data);
            console.log(response.data);
            $location.path("/list");
        });
    }

}

angular.module("appModule").component("ssFormbtn", {
    templateUrl: "view/formBtnBar.html",
    controller: FormBtnComponentCtrl,
    bindings: {
        user: "="
    }
});