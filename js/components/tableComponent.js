function TableController($scope, $element, $attrs, $http) {
  var ctrl = this;
  
  ctrl.updateSelected = function(user){
    if(user.selected) ctrl.onUpdate({user:user})
    console.log(user);
  }

}

angular.module('appModule').component('ssTable', {
  templateUrl: 'view/table.html',
  controller: TableController,
  bindings: {
    filter: "=",
    onUpdate: "&",
    receivingData: "=data"
  },
});