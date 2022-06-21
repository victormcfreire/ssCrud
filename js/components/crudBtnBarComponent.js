function CrudBtnController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.ngModelChange = function () {
    this.ngModelCtrl.$setViewValue(this.ngModel);
  }

  ctrl.getSelectedUsers = function (){
    if(ctrl.selectedusers.result.length == 1){
      ctrl.tooManyUsers = false;
      return ctrl.selectedusers.result[0].id;
    }
    else if(ctrl.selectedusers.result.length > 1){
      ctrl.tooManyUsers = true;
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
    modelname: "=",
    selectedusers: "<",
    receivingData:"=data"
  }
});