myApp.controller('BrandsCtrl', function ($scope, myService, TemplateService, ProductService, BannerService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/brands.html");
    TemplateService.title = "Brands"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    // var banner = {
    //     pageName: "Brands"
    // }
    // BannerService.getBanner(banner, function (data) {
    //     $scope.banner = data.data.data;

    // });
    // myService.ctrlBanners("Brands", function (data) {
    //     $scope.banner = data;
    // });

    // ProductService.getBrands(function (data) {
    //     if (data.data.data) {
    //         $scope.brands = data.data.data;
    //     } else {
    //         $scope.message = "No Product Found";
    //     }
    // })


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

    $scope.brands = [{
        logo: 'img/brands/dockers.png'
    }, {
        logo: 'img/brands/eagle.png'
    }, {
        logo: 'img/brands/ms-custom.png'
    }, {
        logo: 'img/brands/tony1.png'
    }, {
        logo: 'img/brands/ralph-custom.png'
    }, {
        logo: 'img/brands/ms.png'
    }, {
        logo: 'img/brands/ms-custom.png'
    }, {
        logo: 'img/brands/tony1.png'
    }, {
        logo: 'img/brands/ralph-custom.png'
    }, {
        logo: 'img/brands/ms.png'
    }, ];

});