function EditFormCtrl($scope, $element, $attrs, $routeParams) {
    var ctrl = this


    ctrl.$onInit = function(){
        for (let i = 0; i < ctrl.users.result.length; i++) {
            const element = ctrl.users.result[i];
            $scope.user = element;
        }
    }
}

angular.module("appModule").component("ssEditform", {
    templateUrl: "view/editForm.html",
    controller: EditFormCtrl,
    bindings: {
        receivingData: "=data",
        users: "="
    }
});