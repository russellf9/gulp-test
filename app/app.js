var app = angular.module('f9.gulp-test', ['ui.router'
                                ])

    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            console.log('trying!');

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'components/home.html'
                });
        }]);

app.run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});



//f9.grid.simple-example
