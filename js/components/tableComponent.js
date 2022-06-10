function TableController($scope, $element, $attrs, $http) {
  var ctrl = this;

  $http.get('../data.json').
    then(function (res) {
      $scope.data = res.data;
      console.log($scope.data);
    }).catch(function (err) {
      console.log(err);
    });

  ctrl.users = $scope.data


  ctrl.verifyUserSelected = function (users) {
    $scope.hasUserSelected = users.some(function (user) {
      return user.selected;
    });
  };
}

angular.module('appModule').component('ssTable', {
  templateUrl: 'view/table.html',
  controller: TableController,
  bindings: {
    filter:"="
  }
});