myApp.controller('ListingPageCtrl', function ($scope, toastr, CartService, $rootScope, $stateParams, $state, $filter, WishlistService, TemplateService, NavigationService,
    SizeService, BannerService, CategoryService, myService, ProductService, $timeout, $uibModal, ModalService, ListingService) {
    $scope.template = TemplateService.getHTML("content/listing-page.html");
    TemplateService.title = "Form"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;


    $scope.banner = {
        image: 'img/listing/common.jpg'
    };

    $scope.categories = [{
        id: '1',
        name: 'Casual',
        extLink: 'home'
    }, {
        id: '2',
        name: 'T-shirts',
        extLink: 'home'
    }, {
        id: '2',
        name: 'Trouser',
        extLink: 'home'
    }, ];

    $scope.filters = [{
            types: [{
                    id: '1',
                    name: 'shorts'
                },
                {
                    id: '2',
                    name: 'Shorts2'
                }
            ]
        }

    ];

    $scope.menu = [{
        item: 'Newest First'
    }, {
        item: 'Highest Price'
    }, {
        item: 'Lowest price'
    }, {
        item: 'Relevence'
    }, {
        item: 'Reviews'
    }];

    $scope.products = [{
        row: {
            productId: '1234',
            images: [{
                image: 'img/home/8.jpg'
            }, {
                image: 'img/home/8.jpg'
            }, {
                image: 'img/home/8.jpg'
            }, {
                image: 'img/home/8.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row1: {
            productId: '123',
            images: [{
                image: 'img/home/9.jpg'
            }, {
                image: 'img/home/9.jpg'
            }, {
                image: 'img/home/9.jpg'
            }, {
                image: 'img/home/9.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row2: {
            productId: '123',
            images: [{
                image: 'img/home/11.jpg'
            }, {
                image: 'img/home/11.jpg'
            }, {
                image: 'img/home/11.jpg'
            }, {
                image: 'img/home/11.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row3: {
            productId: '123',
            images: [{
                image: 'img/home/12.jpg'
            }, {
                image: 'img/home/12.jpg'
            }, {
                image: 'img/home/12.jpg'
            }, {
                image: 'img/home/12.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row4: {
            productId: '123',
            images: [{
                image: 'img/home/10.jpg'
            }, {
                image: 'img/home/10.jpg'
            }, {
                image: 'img/home/10.jpg'
            }, {
                image: 'img/home/10.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row5: {
            productId: '123',
            images: [{
                image: 'img/home/13.jpg'
            }, {
                image: 'img/home/13.jpg'
            }, {
                image: 'img/home/13.jpg'
            }, {
                image: 'img/home/13.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row6: {
            productId: '123',
            images: [{
                image: 'img/home/19.jpg'
            }, {
                image: 'img/home/19.jpg'
            }, {
                image: 'img/home/19.jpg'
            }, {
                image: 'img/home/19.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row7: {
            productId: '123',
            images: [{
                image: 'img/home/10.jpg'
            }, {
                image: 'img/home/10.jpg'
            }, {
                image: 'img/home/10.jpg'
            }, {
                image: 'img/home/10.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
        row8: {
            productId: '123',
            images: [{
                image: 'img/home/12.jpg'
            }, {
                image: 'img/home/12.jpg'
            }, {
                image: 'img/home/12.jpg'
            }, {
                image: 'img/home/12.jpg'
            }, ],
            price: '2899',
            productName: 'Lines full sleeve shirt with rollup',
            sizes: [{
                name: '36'
            }, {
                name: '38'
            }, {
                name: '40'
            }, {
                name: '42'
            }],
        },
    }];

    $scope.quickviewProduct = function (product) {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/quickview-product.html",
            controller: 'ListingPageCtrl',
            scope: $scope,
            size: 'lg',
        })
    }

    $scope.productImages = [{
        productId: '1',
        image: 'img/home/8.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, {
        productId: '2',
        image: 'img/home/8.jpg',
        price: '2899',
        productName: 'Lines full sleeve shirt with rollup',
        extLink: 'home'
    }, ];

    $scope.product = {
        productId: '1',
        productName: 'Lines full sleeve shirt with rollup',
        price: '2899',
        description: 'Lines full sleeve shirt with rollup Lines full sleeve shirt with rollup Lines full sleeve shirt with rollup Lines full sleeve shirt with rollup',
        brand: 'Maro Swag',
        prodCollection: 'Amten Prints',
        style: 'full sleeve foldable',
        fabric: '56% Cotton 44% Tensal',
        color: 'White',
        washcare: 'Wash Dark colors seperately. Turn Inside Out Before washing and drying. Do not bleach. Trumble dry normal. Always dry in Shade. USe warm Iron'

    };

    $scope.sizes = [{
        name: '36'
    }, {
        name: '38'
    }, {
        name: '40'
    }, {
        name: '42'
    }, ];

});