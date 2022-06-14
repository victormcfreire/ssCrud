function ListComponentCtrl($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.selectedUsers = $scope.data.filter(function (user){
        if(user.selected) return user;
    })

    console.log($scope.data);

}

angular.module("listModule").component('ssList', {
    templateUrl: "view/list.html",
    controller: ListComponentCtrl,
});