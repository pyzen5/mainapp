angular.module('mainMod').controller('vehicleCtrl',function($scope, $state){
    $scope.pageName = "vehicles page";
    $scope.getExtras = function(){
        $state.go("extras");
    }
})

angular.module('mainMod').controller('extrasCtrl',function($scope, $state){
    $scope.pageName = "extras page";
    $scope.getReview = function(){
        $state.go("review");
    }
})

angular.module('mainMod').controller('reviewCtrl',function($scope, $state){
    $scope.pageName = "review page";
    $scope.getConfirm = function(){
        $state.go("confirm");
    }
})

angular.module('mainMod').controller('confirmCtrl',function($scope){
    $scope.pageName = "confirm page";
})

angular.module('mainMod').controller('homeCtrl',function($scope, $state){
    $scope.pageName = "home page";
    $scope.getVehicles = function(){
        $state.go("vehicles");
    }
})