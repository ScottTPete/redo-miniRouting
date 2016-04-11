app.controller('productsCtrl', function($scope, $stateParams, productService) {
	if($stateParams.id === 'shoes') {
		$scope.productData = productService.shoeData; //if on shoes productData will be equal to shoeData in the service and put shoes on scope
	} else if ($stateParams.id == 'socks') {	
		$scope.productData = productService.sockData; //if on socks productData will be equal to sockData in the service and put socks on scope
	}
	
	
})