myApp.controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/about.html");
    TemplateService.title = "About us"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
});