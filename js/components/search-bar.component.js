function SearchBarCtrl($scope, $element, $attrs){
    var ctrl = this;

    ctrl.ngModelChange = function(){
        this.ngModelCtrl.$setViewValue($scope.filter);
    }
}

angular.module("searchBarModule").component("ssSearchBar", {
    templateUrl: "view/searchBar.html",
    controller: SearchBarCtrl,
    require:{
        ngModelCtrl:'ngModel'
    },
    bindings: {
        modelname: "<"
    }
});