myApp.controller('ErrorMsgCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    $scope.template = TemplateService.getHTML("content/error-msg.html");
    TemplateService.title = "Error"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    if ($stateParams.id) {
        $scope.orderId = $stateParams.id;
    }
});