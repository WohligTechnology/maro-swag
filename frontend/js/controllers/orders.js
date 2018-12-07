myApp.controller('OrdersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/orders.html");
    TemplateService.title = "Order"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
});