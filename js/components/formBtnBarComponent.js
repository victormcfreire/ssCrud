function FormBtnComponentCtrl($scope, $element, $attrs, $location, usersAPI) {
    var ctrl = this;


    ctrl.saveUser = function (user) {
        if (ctrl.operation == "save") {
            usersAPI.saveUser(user).then(function (response) {
                $location.path("/list");
            });
        }
        else if (ctrl.operation == "edit") {
            usersAPI.editUser(user, user.id).then(function (response) {
                $location.path("/list");
            });
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