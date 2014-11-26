var myApp=angular.module('myApp',[]);
myApp.factory('fabrica')

myApp.controller('control',function($scope){
	var acumulador='';
	$scope.valBtn=function(m){
		acumulador=acumulador + m;
		$scope.preResultado=acumulador;
	};
	$scope.reset=function(){
		$scope.preResultado='borrar';

	};

});

