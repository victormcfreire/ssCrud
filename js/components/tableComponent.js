function TableController($scope, $element, $attrs) {
    var ctrl = this;
  
    ctrl.$onInit = function(){
    }
    ctrl.users = [
        {id: 1, name: "joe", username: "joe123"},
        {id: 2, name: "mark", username: "mark123"},
    ];
  
    ctrl.updateUser = function(user, prop, value) {
      user[prop] = value;
    };
  
    ctrl.deleteUser = function(user) {
      var idx = ctrl.list.indexOf(user);
      if (idx >= 0) {
        ctrl.list.splice(idx, 1);
      }
    };
  }
  
  angular.module('ssCrud').component('ssTable', {
    templateUrl: 'view/table.html',
    controller: TableController,
  });