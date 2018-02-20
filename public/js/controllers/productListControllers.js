myApp.constant("productListActiveClass", "active btn-primary")
.constant("pagniner" , 2)
.controller("productListCtrl" , ($scope , $filter,productListActiveClass , pagniner , cart) =>{
	var selectedCategory   = null ; 
	$scope.currentPage =1 ; 
	$scope.pageSize = pagniner;
	
	$scope.selectCategory = function (newCategory) {
		selectedCategory = newCategory;
		$scope.currentPage =1;
	}
	
	$scope.categoryFilterFn = function (product) {
		return selectedCategory == null ||
		product.category == selectedCategory;
	}
	
	$scope.selectPage = function(page){
		/*console.log("amadou ");*/
		$scope.currentPage = page;
	}

	$scope.getCategoryClass = function (category) {
		return selectedCategory == category ? productListActiveClass : "";
	}
	
	$scope.getPageClass = (page)=>{
		return $scope.currentPage == page ? productListActiveClass:"" ; 
	}
	$scope.addProductToCart = function (product) {
		cart.addProduct(product.id, product.nom, product.prixHT * product.taxePourcentage);
	}

});