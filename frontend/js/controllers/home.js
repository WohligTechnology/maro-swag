myApp.controller('HomeCtrl', function ($scope, TemplateService, CartService, $state, myService, ModalService, WishlistService, NavigationService, ProductService, $timeout, $location, $stateParams) {
    $scope.template = TemplateService.getHTML("content/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.toggled = function (open) {
        alert('xd');
    };
    //flexsider 
    $scope.clothCat = [{
        id: '1',
        image: 'img/home/1.jpg',
        extLink: 'home'
    }, ];

   

    // <!--start of All Categorie-->

    $scope.HomePageBlocks = [{
        id: '1',
        imgLink: 'img/home/5.jpg',
        extLink: 'home'
    }, {
        id: '2',
        imgLink: 'img/home/6.jpg',
        extLink: 'home'
    }, {
        id: '3',
        imgLink: 'img/home/2.jpg',
        extLink: 'home'
    }, {
        id: '4',
        imgLink: 'img/home/4.jpg',
        extLink: 'home'
    }, {
        id: '5',
        imgLink: 'img/home/3.jpg',
        extLink: 'home'
    }, ];

    // <!--End of All Categorie-->

    // <!--start of New Arrivals-->

    $scope.newArrivals = [{
        productId: '1',
        image: 'img/home/8.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '2',
        image: 'img/home/9.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '3',
        image: 'img/home/10.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '4',
        image: 'img/home/8.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '5',
        image: 'img/home/9.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '6',
        image: 'img/home/10.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, ];

    // <!--End of New Arrivals-->

    // <!--Start of Featured-->

    $scope.featured = [{
        productId: '1',
        image: 'img/home/8.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '2',
        image: 'img/home/9.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '3',
        image: 'img/home/10.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '4',
        image: 'img/home/8.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, ];

    // <!--End of Featured-->

    // <!--Start of Buy The Look-->

    $scope.getthelook = {
        id: '1',
        majorImage: 'img/home/15.jpg',
        title: 'lorem ipsum is dummy',
        description: 'lorem ipsum is dummy It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset'
    };
    // <!--End of Buy The Look-->

    // Start of Blog Section

    $scope.blogs = [{
        id: '1',
        image: 'img/home/16.jpg',
        name: 'lorem ipsum is dummy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        extLink: 'home'
    }, {
        id: '2',
        image: 'img/home/17.jpg',
        name: 'lorem ipsum is dummy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        extLink: 'home'
    }, {
        id: '3',
        image: 'img/home/18.jpg',
        name: 'lorem ipsum is dummy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        extLink: 'home'
    }, ];

    // End of Blog Section

    // <!--Start of Sale-->

    $scope.sale = [{
            productId: '1',
            image: 'img/home/11.jpg',
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            extLink: 'home'
        }, {
            productId: '2',
            image: 'img/home/12.jpg',
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            extLink: 'home'
        }, {
            productId: '3',
            image: 'img/home/13.jpg',
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            extLink: 'home'
        }, {
            productId: '4',
            image: 'img/home/14.jpg',
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            extLink: 'home'
        },
        {
            productId: '5',
            image: 'img/home/14.jpg',
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            extLink: 'home'
        }, {
            productId: '6',
            image: 'img/home/11.jpg',
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            extLink: 'home'
        }, {
            productId: '7',
            image: 'img/home/12.jpg',
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            extLink: 'home'
        },
    ];

    // <!--End of Sale-->



    // $scope.featuredVisible = true;
    // ProductService.getthelook(function (data) {
    //     $scope.getthelook = data.data.data;
    // })
    // $scope.userId = $.jStorage.get('userId');
    // NavigationService.EnabledHomeScreen(function (data) {
    //     $scope.clothCat = data.data.data;
    // });
    // NavigationService.getEnabledCategories(function (data) {
    //     $scope.categories = data.data.data;
    // });
    // NavigationService.getEnabledHomePageBlock(function (data) {
    //     $scope.HomePageBlocks = data.data.data;
    //     console.log("$scope.HomePageBlocks", $scope.HomePageBlocks);
    // });
    // ProductService.getNewArrivals(function (data) {
    //     $scope.newArrivals = data.data.data;
    // });
    // var userId = {
    //     userId: $.jStorage.get("userId"),
    //     accessToken: $.jStorage.get("accessToken")
    // }
    // if (userId.userId) {
    //     CartService.getCart(userId, function (data) {
    //         if (data.data.data) {
    //             $scope.mycart = data.data.data.products;
    //             $scope.tempcart = [];
    //             for (var i = 0; i < $scope.mycart.length; i++) {
    //                 $scope.tempcart.push({
    //                     productId: $scope.mycart[i].product.productId
    //                 })
    //             }
    //         }


    //     })
    //     WishlistService.getWishlist(userId, function (result) {

    //         $scope.wishlist = result.data.data;

    //     });
    // } else {
    //     $scope.mycart = []
    //     $scope.mycart = $.jStorage.get("cart");
    //     $scope.wishlist = $.jStorage.get("wishlist")
    //     if ($scope.mycart) {
    //         $scope.mycart = $scope.mycart.products;
    //         $scope.tempcart = [];
    //         if ($scope.mycart) {
    //             for (var i = 0; i < $scope.mycart.length; i++) {
    //                 $scope.tempcart.push({
    //                     productId: $scope.mycart[i].product.productId
    //                 })
    //             }
    //         }
    //     }


    // }
    // $scope.checkInCart = function (productId) {
    //     if (userId.userId) {

    //         var result = _.find($scope.tempcart, {
    //             "productId": productId
    //         });

    //         if (result) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     } else {
    //         var result = _.find($scope.tempcart, {
    //             "productId": productId
    //         });

    //         if (result) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }
    // }

    // $scope.checkWishlist = function (productId) {

    //     if (userId.userId) {

    //         var result = _.find($scope.wishlist, {
    //             "productId": productId
    //         });

    //         if (result) {
    //             return "fa fa-heart";
    //         } else {
    //             return "fa fa-heart-o";
    //         }
    //     } else {
    //         var result = _.find($scope.wishlist, {
    //             "productId": productId
    //         });

    //         if (result) {
    //             return "fa fa-heart";
    //         } else {
    //             return "fa fa-heart-o";
    //         }
    //     }
    // }

    // $scope.addToWishlist = function (prod) {
    //     var data = {
    //         "product": prod,
    //     }
    //     myService.addToWishlist(data, function (data) {
    //         ModalService.addwishlist();
    //     })
    // }
    // $scope.removeWishlist = function (prodId) {
    //     var data = {};
    //     if ($.jStorage.get("accessToken")) {
    //         data.accessToken = $.jStorage.get("accessToken");
    //         data.productId = prodId;
    //         WishlistService.removeProduct(data, function (data) {
    //             console.log(data);
    //             $state.reload();
    //         })
    //     } else {
    //         data.productId = prodId;
    //         myService.removeWishlist(data, function (data) {
    //             console.log(data);
    //             $state.reload();
    //         })
    //     }
    // }
    // $scope.addRemoveToWishlist = function (product) {
    //     if (userId.userId) {

    //         var result = _.find($scope.wishlist, {
    //             "productId": product.productId
    //         });
    //         if (result) {
    //             $scope.removeWishlist(product.productId);
    //         } else {
    //             $scope.addToWishlist(product);
    //         }
    //     } else {
    //         var result = _.find($scope.wishlist, {
    //             "productId": product.productId
    //         });
    //         if (result) {
    //             $scope.removeWishlist(product.productId);
    //         } else {
    //             $scope.addToWishlist(product);
    //         }
    //     }
    // }
    // NavigationService.getEnabledBlogs(function (data) {
    //     $scope.blogs = data.data.data;

    // });

    // $scope.saleOld = [{
    //     img: '../img/home/11.jpg',
    //     price: '2,899',
    //     type: 'Linen Full Sleeve ShirtWith Rollup'

    // }, {
    //     img: '../img/home/12.jpg',
    //     price: '2,899',
    //     type: 'Linen Full Sleeve ShirtWith Rollup'

    // }, {
    //     img: '../img/home/13.jpg',
    //     price: '2,899',
    //     type: 'Linen Full Sleeve ShirtWith Rollup'

    // }, {
    //     img: '../img/home/14.jpg',
    //     price: '2,899',
    //     type: 'Linen Full Sleeve ShirtWith Rollup'

    // }, {
    //     img: '../img/home/11.jpg',
    //     price: '2,899',
    //     type: 'Linen Full Sleeve ShirtWith Rollup'

    // }, {
    //     img: '../img/home/12.jpg',
    //     price: '2,899',
    //     type: 'Linen Full Sleeve ShirtWith Rollup'

    // }, {
    //     img: '../img/home/13.jpg',
    //     price: '2,899',
    //     type: 'Lorem Ipsum is simply dummy text'

    // }, {
    //     img: '../img/home/14.jpg',
    //     price: '2,899',
    //     type: 'Lorem Ipsum is simply dummy text'

    // }];
    // ProductService.getFeatured(function (data) {
    //     $scope.featured = data.data.data.featureds;
    //     $scope.sale = data.data.data.featureds;
    //     if (_.isEmpty($scope.featured)) {
    //         $scope.featuredVisible = false;
    //     }

    // });
});