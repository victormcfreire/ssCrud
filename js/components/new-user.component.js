function NewUserCtrl($scope, $element, $attrs) {
    var ctrl = this;
    
    $scope.newId = function (){
        var lastElement = ctrl.receivingData.at(-1);
        return lastElement.id + 10;
    }
}

angular.module("newUserModule").component("ssNewuser", {
    templateUrl: "view/newUser.html",
    controller: NewUserCtrl,
    bindings:{
        receivingData: "<data"
    }
})