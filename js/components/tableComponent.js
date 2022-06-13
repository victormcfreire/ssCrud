function TableController($scope, $element, $attrs, $http) {
  var ctrl = this;

  $http.get('../data.json').
    then(function (res) {
      $scope.data = res.data;
    }).catch(function (err) {
      console.log(err);
    });

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
    onUpdate: "&"
  }
});