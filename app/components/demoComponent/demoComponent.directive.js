angular.module('f9.gulp-test')

    .directive('demoComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/demoComponent/demoComponent.html',
            controllerAs: 'input',
            controller: controller
        };

        function controller() {
            var vm = this;

            console.log('healthyGulpAngularApp')

        }
    }]);
