myApp.controller("productListCtrl" ,['$scope' , ($scope , $filter) =>{
	var selectedCategory   = null ; 
	$scope.selectCategory = function (newCategory) {
		selectedCategory = newCategory;
	}
	
	$scope.categoryFilterFn = function (product) {
		return selectedCategory == null ||
		product.category == selectedCategory;
	}
}]);