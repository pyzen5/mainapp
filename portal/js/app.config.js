angular.module('mainMod')
.config(config)
.run(run);
    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function config($locationProvider,$stateProvider,$urlRouterProvider){ 
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('default',{
        url:'/',
        templateUrl:'partials/home.html',
        controller: 'homeCtrl'       
    })
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'partials/home.html',
        controller: 'homeCtrl'       
    })
    $stateProvider.state('about',{
        url:'/about',
        templateUrl:'partials/about.html'
    })
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'partials/login.html'
    })
    $stateProvider.state('logout',{
        url:'/logout',
        templateUrl:'partials/about.html'
    })
    $stateProvider.state('vehicles',{
        url:'/vehicles',
        templateUrl:'partials/vehicles.html',
        controller: 'vehicleCtrl'
    })
    $stateProvider.state('extras',{
        url:'/extras',
        templateUrl:'partials/extras.html',
        controller: 'extrasCtrl'
    })
    $stateProvider.state('review',{
        url:'/review',
        templateUrl:'partials/review.html',
        controller: 'reviewCtrl'
    })
    $stateProvider.state('confirm',{
        url:'/confirm',
        templateUrl:'partials/confirm.html',
        controller:'confirmCtrl'
    })
}

    run.$inject = ['$rootScope', '$location', '$window'];
    function run($rootScope, $location, $window) {
        // initialise google analytics
        $window.ga('create', 'UA-130403760-1', 'auto');
 
        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
            $window.ga('send', 'pageview', $location.path());
        });
    }