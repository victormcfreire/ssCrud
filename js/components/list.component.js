function ListComponentCtrl($scope, $element, $attrs, usersAPI) {
    var ctrl = this;
    ctrl.tooManyUsers;
    
}

angular.module("listModule").component('ssList', {
    templateUrl: "view/list.html",
    controller: ListComponentCtrl
});