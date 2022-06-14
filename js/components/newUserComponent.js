function NewUserCtrl($scope, $element, $attrs) {
    var ctrl = this;

}


angular.module("appModule").component("ssNewuser", {
    templateUrl: "view/newUser.html",
    controller: NewUserCtrl,
    bindings:{
        receivingData: "=data"
    }
})