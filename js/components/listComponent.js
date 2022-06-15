function ListComponentCtrl($scope, $element, $attrs) {
    var ctrl = this;

}

angular.module("listModule").component('ssList', {
    templateUrl: "view/list.html",
    controller: ListComponentCtrl,
});