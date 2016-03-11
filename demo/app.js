/* global angular */

function Config($locationProvider) {
    $locationProvider.html5Mode({ enabled: true })
}

Run.$inject = ['$rootScope'];

function Run($rootScope) {
    console.log('running demo');
    $rootScope.vm = new TestController();
}

angular.module("demo", ['ngMoment'])
    .config(Config)
    .run(Run);
   