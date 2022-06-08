function PaginationCtrl($scope){
    var $ctrl = this;

    $ctrl.activePage = function(){
        $ctrl.isPageActive = !$ctrl.isPageActive
        console.log($ctrl.isPageActive)
        return $ctrl.isPageActive
    }
}

angular.module("ssCrud").component("ssPagination", {
    templateUrl: "view/pagination.html",
    controller: PaginationCtrl
});