function SearchBarCtrl($scope, $element, $attrs){
    var ctrl = this;

    ctrl.searchInput = function(){
        return $scope.searchInput;
    }

    ctrl.ngModelChange = function(){
        this.ngModelCtrl.$setViewValue(this.ngModel);
    }
}

angular.module("appModule").component("ssSearchbar", {
    templateUrl: "view/searchBar.html",
    controller: SearchBarCtrl,
    require:{
        ngModelCtrl:'ngModel'
    },
    bindings: {
        modelname: "="
    }
});