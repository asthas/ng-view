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


app.controller('mainController', function(){
	var vm = this;
	vm.pageClass= 'page-home';
})

app.controller('aboutController', function(){
	var vm = this;
	vm.pageClass= 'page-about';
})

app.controller('contactController', function(){
	var vm = this;
	vm.pageClass= 'page-contact';
})