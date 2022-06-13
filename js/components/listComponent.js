function ListComponentCtrl($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.clicked = function () {
        console.log("clicked");
        ctrl.title = "clicado";
    }

    ctrl.selectedUsers = [];

    ctrl.onUpdate = function (user) {
        console.log(user);
        try {
            ctrl.selectedUsers.push(user)
            console.log(this.selectedUsers);
        } catch (err) {
            console.log(err);
        }
    }

    ctrl.deleteUsers = function (index) {
        ctrl.selectedusers.splice(index, 1)
    };

}

angular.module("listModule").component('ssList', {
    templateUrl: "view/list.html",
    controller: ListComponentCtrl,
});