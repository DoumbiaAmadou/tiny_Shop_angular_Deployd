window.myApp =angular.module("journaux" , ['customFilters']);
myApp.controller("journauxCtrl", ['$scope' , function ($scope) {
	
	$scope.data = {
		products: [
		{ name: "Product #1", description: "A product",	category: "Category #1", price: 60 },
		{ name: "Product #2", description: "A product",	category: "Category #1", price: 410 },
		{ name: "Product #3", description: "A product",category: "Category #2", price: 310 },
		{ name: "Product #4", description: "A product",category: "Category #3", price: 20 },
		{ name: "Product #5", description: "A product",category: "Category #3", price: 15 },
		{ name: "Product #6", description: "A product",category: "Category #3", price: 29 },
		{ name: "Product #7", description: "A product",category: "Category #2", price: 27 },
		{ name: "Product #8", description: "A product",category: "Category #2", price: 62 },
		{ name: "Product #9", description: "A product",category: "Category #3", price: 32 },
		{ name: "Product #10", description: "A product",category: "Category #3", price: 62 },
		{ name: "Product #11", description: "A product",category: "Category #1", price: 92 },
		{ name: "Product #12", description: "A product",category: "Category #1", price: 52 },
		{ name: "Product #13", description: "A product",category: "Category #3", price: 42 },
		

		]
	};
}]);