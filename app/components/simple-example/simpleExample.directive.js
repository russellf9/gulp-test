/**
 * Created by russell@factornine.co.uk on 13/06/2015.
 */
angular.module('f9.grid.simple-example')

	.directive('simpleExample', SimpleExample);

function SimpleExample() {
	return {
		restrict: 'A',
		scope: {
			options: '='
		},
		templateUrl: 'components/simple-example/simple-example.html'
	};
}