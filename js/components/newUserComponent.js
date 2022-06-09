
angular.module("appModule").component("ssNewuser", {
    templateUrl: "view/newUser.html",
    controller: "newUserCtrl"
})
.controller("newUserCtrl", function($scope, $location){
    var $ctrl = this;
    
    $ctrl.addUser = function(){
        console.log("adicionou");
    }
});