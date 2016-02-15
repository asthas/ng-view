var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
	$routeProvider

		//home page
		.when('/', {
			templateUrl: 'page-home.html',
			controller: 'mainController'
		})

		//about page
		.when('/about', {
			templateUrl:'page-about.html',
			controller: 'aboutController'
		})

		//contact page
		.when('/contact', {
			templateUrl: 'page-contact.html',
			controller: 'contactController'
		});
});


app.controller('mainController', function($scope){
	$scope.pageClass= ' page-home';
})

app.controller('aboutController', function($scope){
	$scope.pageClass= ' page-about';
})

app.controller('contactController', function($scope){
	$scope.pageClass= ' page-contact';
})