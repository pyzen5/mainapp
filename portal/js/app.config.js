angular.module('mainMod')
.config(config)
.run(run);
    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    function config($locationProvider,$stateProvider,$urlRouterProvider){
 
        $urlRouterProvider.otherwise("/");
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'partials/home.html'
    })
    $stateProvider.state('about',{
        url:'/about',
        templateUrl:'partials/about.html'
    })
    }

    run.$inject = ['$rootScope', '$location', '$window'];
    function run($rootScope, $location, $window) {
        // initialise google analytics
        $window.ga('create', 'UA-88934895-1', 'auto');
 
        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
            $window.ga('send', 'pageview', $location.path());
        });
    }