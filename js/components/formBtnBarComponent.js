function FormBtnComponentCtrl($scope, $element, $attrs, $location, usersAPI) {
    var ctrl = this;
    
    ctrl.addUser = function(){
        console.log("adicionou no form component");
    }

    ctrl.output = function(){
        return $scope.user.name;
    }

    ctrl.addUser = function (user){
        console.log(user);
      }

}

angular.module("appModule").component("ssFormbtn", {
    templateUrl: "view/formBtnBar.html",
    controller: FormBtnComponentCtrl
});