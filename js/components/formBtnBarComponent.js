function FormBtnComponentCtrl($scope, $element, $attrs, $location, usersAPI, $routeParams) {
    var ctrl = this;
    ctrl.saveUser = function (user, id) {
        if (ctrl.operation == "save") {
            usersAPI.saveUser(user).then(function (response) {
                //$scope.userForm.$setPristine();
                delete $scope.user;
                $location.path("/list");
            });
        }
        else if (ctrl.operation == "edit") {
            for (i in ctrl.receivingData) {
                if (ctrl.receivingData[i].id == id) {
                    usersAPI.editUser(ctrl.receivingData[i].id).then(function (response) {
                        ctrl.receivingData[i] = ctrl.scopeuser;
                        $location.path("/list");
                    })
                }
            }
        }
    }
}


angular.module("appModule").component("ssFormbtn", {
    templateUrl: "view/formBtnBar.html",
    controller: FormBtnComponentCtrl,
    bindings: {
        scopeuser: "=",
        receivingData: "=data",
        operation: "@"
    }
});