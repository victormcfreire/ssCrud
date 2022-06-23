function TableController($scope, $element, $attrs, $http) {
  var ctrl = this;
}

angular.module('tableModule').component('ssTable', {
  templateUrl: 'view/table.html',
  controller: TableController,
  bindings: {
    filter: "<",
    receivingData: "<data",
    checkclicked:"&"
  },
});