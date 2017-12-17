angular.module("cart" , [])
.factory( "cart" , () => {
	var cartData  = [] ;

	return function (){

		addProduct : (id ,name , prix) =>{
			addedToExistingItem = false  ; 
			for (var i = 0; i < cartData.length; i++) {
				if(cartData[i].id == id){
					cartData[i].count++;
					addedToExistingItem = true;
					break;
				}
			}
			if(!addedToExistingItem){
				cartData.push({
					count: 1, id: id, price: price, name: name
				});
			}
		} , 

		removeProduct: (id)=>{
			for (var i = 0; i < cartData.length; i++) {
				if(cartData[i].id == id  ){
					cartData.splice(i , 1 ) ; 
					break  ; 
				}
			}
		}, 
		getProducts: function () {
			return cartData;
		}
	}
})