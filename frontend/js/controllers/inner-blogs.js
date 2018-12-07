myApp.controller('InnerBlogsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    $scope.template = TemplateService.getHTML("content/inner-blogs.html");
    TemplateService.title = "Blogs"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    var blogData = {}; // To push $stateParams obj
    $scope.sliderBlogsData = []; // To push individual blogs plus removed one 
    // console.log($stateParams);
    if ($stateParams) {
        blogData.id = $stateParams.id;
        // console.log(blogData.id);
    }
    //  console.log('Blog data', blogData);
    NavigationService.getEnabledInnerBlogs(blogData, function (data) {
        $scope.innarBlogs = data.data.data;
        $scope.sliderBlogsData.push($scope.innarBlogs);
        //  console.log('innerblogs', $scope.innarBlogs);
        //This service used for view also blogs section.
        NavigationService.getEnabledBlogs(function (data) {
            $scope.otherBlogs = data.data.data; // used to get all array of objects from blogs
            // In $scope.removedBlog we will get the objects except the reoved one
            $scope.removedBlog = _.remove($scope.otherBlogs, function (n) {
                return blogData.id != n._id;
            });
            $scope.sliderBlogsData.push($scope.removedBlog);
            $scope.sliderBlogsData = _.flattenDeep($scope.sliderBlogsData);
            //console.log('after removing', $scope.removedBlog);
            // console.log('sliderBlogsData', $scope.sliderBlogsData);
        });
    });

});