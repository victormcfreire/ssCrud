function NewUserCtrl($scope, $element, $attrs) {
    var ctrl = this;
    var dataArray = $scope.data
    
    $scope.user = {
        id: 4  
    }

    $scope.newUserId = 5555
    console.log(newUserId);

}


angular.module("appModule").component("ssNewuser", {
    templateUrl: "view/newUser.html",
    controller: NewUserCtrl
})