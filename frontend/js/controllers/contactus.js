myApp.controller('ContactUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/contactus.html");
    TemplateService.title = "Coming Soon"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
});