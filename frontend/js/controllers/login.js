myApp.controller('LoginCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("modal/login.html");
    TemplateService.title = "Login"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
});