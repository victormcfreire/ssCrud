function CrudBtnController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.ngModelChange = function () {
    this.ngModelCtrl.$setViewValue(this.ngModel);
  }

  ctrl.getSelectedUsers = function (){
    for (let i = 0; i < ctrl.selectedusers.result.length; i++) {
      const element = ctrl.selectedusers.result[i];
      return element.id;
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