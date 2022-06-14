function EditFormCtrl($scope, $element, $attrs, $routeParams){
    var ctrl = this
}

angular.module("appModule").component("ssEditform", {
    templateUrl: "view/editForm.html",
    controller: EditFormCtrl,
    bindings:{
        receivingData: "=data"
    }
});