function EditFormCtrl($scope, $element, $attrs, $routeParams) {
    var ctrl = this

    this.$onInit = () => {
        $scope.user = ctrl.user;
    }
}

angular.module("appModule").component("ssEditform", {
    templateUrl: "view/editForm.html",
    controller: EditFormCtrl,
    bindings: {
        receivingData: "=data",
        user: "<"
    }
});