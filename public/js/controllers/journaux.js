window.myApp =angular.module("journaux" , ['customFilters' , 'cart' , 'ngRoute']);
myApp.constant("dataUrl" ,  "http://localhost:2403/produits")
.constant("orderUrl" ,  "http://localhost:2403/orders")
//myApp.constant("dataUrl" ,  "http://localhost:2403/dontesist")

.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("");
	$routeProvider.when("/checkout", {
		templateUrl: "/js/components/cart/checkoutSummary.html"
	});
	$routeProvider.when("/products", {
		templateUrl: "/PrivateViews/produitsView.html"
	});
	$routeProvider.when("/placeorder" , {
		templateUrl: "PrivateViews/placeOrder.html"
	}); 
	$routeProvider.when("/complete" , {
		templateUrl: "PrivateViews/complete.html"
	}); 
	$routeProvider.otherwise({
		templateUrl: "/PrivateViews/produitsView.html"
	});
})
.controller("journauxCtrl",  function ($scope , $http , $location, dataUrl  , orderUrl , cart) {
	$scope.data = {
		/*		products: [
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
		]*/
	};
	$http.get(dataUrl)
	.then( function(response){
		//console.log( " staus "+ response.data.message );
		if(response.status ==200)
			$scope.data.products= response.data ;
		else 
			$scope.data.error = response.data.message ; 
	});
	$scope.sendOrder = function (shippingDetails) {
		var order = angular.copy(shippingDetails);
		order.products = cart.getProducts();
		$http.post(orderUrl, order)
			.then(function (response) {
				if(response.status==200){
					$scope.data.orderId = response.id;
					cart.getProducts().length = 0;
					$location.path("/complete");
				}
				else
				 	$scope.data.orderError = error;
			});
	}
});