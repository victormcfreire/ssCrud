function CrudBtnController($scope, $element, $attrs) {
  var ctrl = this;
  
  ctrl.clicks = 0;

  ctrl.output = function(){
    return $scope.scopeMessage;
  }

  ctrl.contarClicks = function () {
    console.log("clicou");
    ctrl.clicks++;
  }

  ctrl.deleteUsers = function (users) {
    var selectedUsers = users.filter(function (user) {
      if (user.selected) return user;
    });
    console.log(selectedUsers);
  }
}

angular.module("appModule").component("ssCrudbtn", {
  templateUrl: "view/crudBtnBar.html",
  controller: CrudBtnController
});