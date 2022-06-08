function CrudBtnController($scope, $element, $attrs) {
    var ctrl = this;
  
    ctrl.$onInit = function(){
    }
  }

angular.module("ssCrud").component("ssCrudbtn", {
    templateUrl: "view/crudBtnBar.html",
    controller: CrudBtnController
});