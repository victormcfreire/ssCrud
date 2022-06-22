function CrudBtnController($scope, $element, $attrs, $location) {
  var ctrl = this;

  ctrl.ngModelChange = function () {
    this.ngModelCtrl.$setViewValue(this.ngModel);
  }

  ctrl.checkUsers = function(users){
    if(users.length == 1){
      ctrl.toomanyusers = false;
      $location.path('/editUser/' + users[0].id);
    }
    else if(users.length > 1){
      ctrl.toomanyusers = true;
    }
  }
}

angular.module("appModule").component("ssCrudbtn", {
  templateUrl: "view/crudBtnBar.html",
  controller: CrudBtnController,
  require: {
    ngModelCtrl: 'ngModel'
  },
  bindings: {
    modelname: "<",
    selectedusers: "<",
    receivingData:"<data",
    toomanyusers: "="
  }
});