function ListComponentCtrl($scope, $element, $attrs, $resource) {
    var ctrl = this;

}

angular.module("listModule").component('ssList', {
    templateUrl: "view/list.html",
    controller: ListComponentCtrl,
});