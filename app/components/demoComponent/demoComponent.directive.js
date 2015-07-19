angular.module('demo', [])

    .directive('demoComponent', [function() {
        return {
            restrict: 'AE',
            templateUrl: 'components/demoComponent/demoComponent.html',
            controllerAs: 'input',
            controller: controller
        };

        function controller() {
            var vm = this;

            console.log('demo!')

        }
    }]);
