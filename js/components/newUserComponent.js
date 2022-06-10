function NewUserCtrl ($scope, $element, $attrs){
    var ctrl = this;
    
    ctrl.output = function(){
        console.log(ctrl.user.name)
    }
}


angular.module("appModule").component("ssNewuser", {
    templateUrl: "view/newUser.html",
    controller: NewUserCtrl
})