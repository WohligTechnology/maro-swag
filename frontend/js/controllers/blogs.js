myApp.controller('BlogsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/blogs.html");
    TemplateService.title = "Blogs"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    NavigationService.getEnabledBlogs(function (data) {
        $scope.blogs = data.data.data;

    });
});