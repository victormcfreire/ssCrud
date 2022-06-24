function FormBtnComponentCtrl($scope, $element, $attrs, $location, usersAPI) {
    var ctrl = this;


    ctrl.saveUser = function (user) {
        if (ctrl.operation == "save") {
            usersAPI.saveUser(user).then(function (response) {
                $location.path("/list");
            });
        }
        else if (ctrl.operation == "edit") {
            usersAPI.editUser(user).then(function (response) {
                $location.path("/list");
            });
        }
    }
}


angular.module("formBtnBarModule").component("ssFormBtn", {
    templateUrl: "view/formBtnBar.html",
    controller: FormBtnComponentCtrl,
    bindings: {
        scopeuser: "=",
        operation: "@"
    }
});