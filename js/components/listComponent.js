function ListComponentCtrl($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.clicked = function () {
        console.log("clicked");
        ctrl.title = "clicado";
    }
}

angular.module("listModule").component('ssList', {
    templateUrl: "view/list.html",
    controller: ListComponentCtrl,
});