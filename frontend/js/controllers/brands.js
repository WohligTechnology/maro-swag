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
    myService.ctrlBanners("Brands", function (data) {
        $scope.banner = data;
    });

    ProductService.getBrands(function (data) {
        if (data.data.data) {
            $scope.brands = data.data.data;
        } else {
            $scope.message = "No Product Found";
        }
    })

});