myApp.controller('GiftCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/gift.html");
    TemplateService.title = "Gift Card"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
});