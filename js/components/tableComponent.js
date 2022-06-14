function TableController($scope, $element, $attrs, $http) {
  var ctrl = this;
  

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