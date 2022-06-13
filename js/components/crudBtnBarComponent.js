function CrudBtnController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.ngModelChange = function () {
    this.ngModelCtrl.$setViewValue(this.ngModel);
  }

  ctrl.clicks = 0;

  ctrl.output = function () {
    return $scope.myMessage;
  }

  ctrl.contarClicks = function () {
    console.log("clicou");
    ctrl.clicks++;
  }


  ctrl.deleteUsers = function (users) {
    console.log(users);
    $scope.users = users.filter(function (user) {
        if (!user.selected) return user;
    });
    $scope.verifyUserSelected($scope.users);
};
}

angular.module("appModule").component("ssCrudbtn", {
  templateUrl: "view/crudBtnBar.html",
  controller: CrudBtnController,
  require: {
    ngModelCtrl: 'ngModel'
  },
  bindings: {
    modelname: "=",
    selectedusers: "="
  }
});