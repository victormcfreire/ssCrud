function NewUserCtrl($scope, $element, $attrs) {
    var ctrl = this;
    
    $scope.newId = function (){
        var lastElement = ctrl.receivingData.at(-1);
        return lastElement.id + 1
    }

}


angular.module("appModule").component("ssNewuser", {
    templateUrl: "view/newUser.html",
    controller: NewUserCtrl,
    bindings:{
        receivingData: "=data"
    }
})