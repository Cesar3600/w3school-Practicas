var myApp=angular.module('myApp',[]);
/*myApp.factory('fabrica')*/

myApp.controller('control',function($scope){
	var acumulador='';
	var ac = 0;
	$scope.valBtn=function(m){
		acumulador=acumulador + m;
		$scope.preResultado=acumulador;
		ac = acumulador;
		/*console.log(ac es la cadena acumulada);*/
		console.log('cadena acumulada ' + ac);
		console.log('longitud acumulada ' + ac.length);
		/*$scope.prueba=typeof (ac/2);*/

	};
	$scope.reset=function(){
		$scope.preResultado='';
		acumulador=' ';

	};

	$scope.barrido=function(){
		var contador=0;

		for (var i =0; i< ac.length; i++) {
			contador=i++

		};
		$scope.prueba= contador;
	};
})
