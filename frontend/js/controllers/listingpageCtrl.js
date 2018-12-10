myApp.controller('ListingPageCtrl', function ($scope, toastr, CartService, $rootScope, $stateParams, $state, $filter, WishlistService, TemplateService, NavigationService,
    SizeService, BannerService, CategoryService, myService, ProductService, $timeout, $uibModal, ModalService, ListingService) {
    $scope.template = TemplateService.getHTML("content/listing-page.html");
    TemplateService.title = "Form"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;

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
            productName: 'Ghanta',
            sizes: ['36', '38', '40'],
        },
        row1: {
            productId: '123',
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
            productName: 'Ghanta',
            sizes: ['36', '38', '40'],
        },
        row2: {
            productId: '123',
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
            productName: 'Ghanta',
            sizes: ['36', '38', '40'],
        },
        row3: {
            productId: '123',
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
            productName: 'Ghanta',
            sizes: ['36', '38', '40'],
        },
        row4: {
            productId: '123',
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
            productName: 'Ghanta',
            sizes: ['36', '38', '40'],
        }
    }];

});