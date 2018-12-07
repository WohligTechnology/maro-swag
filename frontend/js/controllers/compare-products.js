myApp.controller('compareProductsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/compare-products.html");
    TemplateService.title = "Compare Products"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.products = $.jStorage.get('compareproduct');


    $scope.removeCompareProduct = function (product) {
        _.remove($scope.products, {
            productId: product.productId
        });
        $.jStorage.set('compareproduct', $scope.products);
    }

    // This function is used to display the modal on quck view button
    $scope.quickviewProduct = function (prod) {
        console.log("in quick view", prod);
        $scope.product = prod;

        if ($scope.product.sizes) {
            $scope.sizes = $scope.product.sizes
        } else if (!$scope.product.sizes) {
            $scope.sizes = $scope.product.size;
        }
        console.log($scope.sizes);
        if (angular.isArray($scope.sizes)) {
            $scope.activeButton = $scope.sizes[0].name;
            $scope.selectedSize = $scope.sizes[0];
        } else {
            $scope.activeButton = $scope.sizes.name;
            $scope.selectedSize = $scope.sizes;
        }


        $scope.arrayCheck = angular.isArray($scope.sizes);
        //  console.log("$scope.arrayCheck", $scope.arrayCheck);
        $scope.selectedImage = _.sortBy($scope.product.images, ['order'])[0];
        $scope.selectSize = function (sizeObj) {
            $scope.activeButton = sizeObj.name;
            $scope.selectedSize = sizeObj;
            var data = {
                productId: $scope.product.productId,
                size: sizeObj._id,
                color: $scope.product.color._id
            }
            ProductService.getSKUWithParameter(data, function (data) {
                console.log("SKU:", data.data);
                if (data.data.value) {
                    console.log("after sku if ", $scope.product);
                    $scope.product = data.data.data;
                } else {
                    console.log("after sku", $scope.product);
                    //  $scope.product = {};
                    // TODO: show out of stock
                }
            })
        }
        $scope.addToCart = function () {
            var comment = "";
            myService.addToCart($scope.product, $scope.reqQuantity, $scope.selectedSize, comment, function (data) {
                ModalService.addcart();
                $scope.reload();
            })
        }
        $scope.addToWishlist = function () {
            var data = {
                "product": $scope.product
            }
            myService.addToWishlist(data, function (data) {

                ModalService.addwishlist();
            })
        }
        $scope.selectedImageIndex = 0;
        $scope.changeImage = function (index) {
            $scope.selectedImageIndex = index;
        };
        $scope.reqQuantity = 1;
        $scope.updateQuantity = function (oper) {
            $scope.reqQuantity += parseInt(oper);
            console.log($scope.reqQuantity)
        }
        var quickviewProduct = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/quickview-product.html',
            scope: $scope,
            size: 'lg',
            windowClass: 'quickview-modal-size'
        });
        $scope.closeModal = function () {
            quickviewProduct.close();
        }
    };
    //End of  modal on quck view button
});