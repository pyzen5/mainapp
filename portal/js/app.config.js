angular.module('mainMod').config(function($urlRouterProvider,$stateProvider){
    //$urlRouterProvider.otherwise('/');
    $stateProvider.state('home',{
        url:'/home',
        template:'Home Page'
    })
    $stateProvider.state('about',{
        url:'/about',
        template:'About Page'
    })
})