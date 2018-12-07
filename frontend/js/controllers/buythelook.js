myApp.controller('BuythelookCtrl', function ($scope, $rootScope, $stateParams, ProductService, TemplateService, NavigationService, $timeout, $uibModal, myService, ModalService) {
    $scope.template = TemplateService.getHTML("content/buythelook.html");
    TemplateService.title = "Buythelook"; //This is the Title of the Website
    //$scope.navigation = NavigationService.getEnabledCtNavigation();
    $scope.currentId = $stateParams.id;

    var input = {
        _id: $scope.currentId
    }
    ProductService.getBuyTheLookDetails(input, function (data) {
        $scope.buyshirt = data.data.data.products;
        $scope.insideImage = data.data.data.look.insideImage;
        $scope.myShirt = [];
        $scope.myShirt11 = [];
        // $scope.myShirt = _.chunk($scope.buyshirt, 3);
        $scope.myShirt = $scope.buyshirt;
        // console.log("myshirt", $scope.myShirt);
        // _.each($scope.myShirt, function (n) {
        //     $scope.myShirt1 = _.chunk(n, 3);
        //     $scope.myShirt11.push($scope.myShirt1);
        //     console.log($scope.myShirt11);
        // });
    })

    $rootScope.clickfun = function (product) {

        $scope.compareproduct = $.jStorage.get('compareproduct') ? $.jStorage.get('compareproduct') : [];
        var result = _.find($scope.compareproduct, {
            productId: product.productId
        });
        if (result) {
            _.remove($scope.compareproduct, {
                productId: product.productId
            });
            $.jStorage.set('compareproduct', $scope.compareproduct);
        } else {
            $scope.compareproduct.push(product);
            $.jStorage.set('compareproduct', $scope.compareproduct);

        }

        if (_.isEmpty($.jStorage.get('compareproduct'))) {
            $scope.showCheck = false

        } else {
            $scope.showCheck = true
        }
    }
    $rootScope.checkStateOnReload = function (prodid) {
        var cp = $.jStorage.get("compareproduct")
        var result = _.find(cp, {
            productId: prodid
        });
        if (result) {
            return true;
        } else {
            return false;
        }
    }





    $scope.forgot = function () {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/changepass.html',
            scope: $scope
        });
    };

    $scope.otp1 = function () {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/otp1.html',
            scope: $scope
        });
    };

    $scope.otp2 = function () {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/otp2.html',
            scope: $scope
        });
    };

    // $scope.addwishlist = function () {
    //     $uibModal.open({
    //         animation: true,
    //         templateUrl: 'views/modal/wishlistadd.html',
    //         scope: $scope
    //     });
    // };
    $scope.addWishlist = function (prod) {

        var data = {
            "product": prod,
        }
        myService.addToWishlist(data, function (data) {

            ModalService.addwishlist();
        })
    }

    $scope.addcart = function () {

        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/cartadd.html',
            scope: $scope
        });
    };

    $scope.remove = function () {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/removeitem.html',
            scope: $scope
        });
    };

    $scope.form = true;
    $scope.forms = false;
    $scope.continue = function () {
        $scope.forms = true;
        $scope.form = false;
    };
});