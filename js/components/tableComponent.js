function TableController($scope, $element, $attrs) {
    var ctrl = this;
  
    ctrl.$onInit = function(){
    }
    ctrl.users = [
        {id: 1, name: "joe", username: "joe123"},
        {id: 2, name: "mark", username: "mark123"},
        {id: 3, name: "karl", username: "karl123"},
    ];

    $scope.verifyUserSelected = function(users){
      $scope.hasUserSelected = users.some(function (user) {
          return user.selected;
      });
  };
  }
  
  angular.module('appModule').component('ssTable', {
    templateUrl: 'view/table.html',
    controller: TableController,
  });