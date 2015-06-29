;(function(){
	
	angular.module('ftNotMApp')
		.controller('ExistingCtrl', ExistingStreamController);

		ExistingStreamController.$inject = ['$scope'];

		function ExistingStreamController ($scope) {
			console.log('existing stream controller');
		}; // end controller

}());