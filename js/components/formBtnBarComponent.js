function FormBtnComponentCtrl($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.addUser = function (user) {
        $scope.users.push(angular.copy(user));
        console.log(user);
        delete $scope.user;
    }
}

angular.module("appModule").component("ssFormbtn", {
    templateUrl: "view/formBtnBar.html",
    controller: FormBtnComponentCtrl
});