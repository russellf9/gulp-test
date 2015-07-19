
//f9.grid.simple-example

angular.module('f9.gulp-test', [
    'ui.router',
    'demo'])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            console.log('15:52');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'components/home.html'
                })

                .state('simple-example', {
                    url: '/simple-example',
                    templateUrl: 'components/simple.html',
                    controller: 'SimpleExampleController as simple'
                })

                .state('multiplication', {
                    url: '/multiplication',
                    templateUrl: 'components/multiplication.html'
                })

                .state('random-person', {
                    url: '/random-person',
                    templateUrl: 'components/random-person.html'
                })

                .state('people', {
                    url: '/people',
                    templateUrl: 'components/people.html'
                });

        }]);
