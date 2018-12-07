myApp.controller('ThankYouMsgCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, OrderService) {
    $scope.template = TemplateService.getHTML("content/thankyou-msg.html");
    TemplateService.title = "Thank You"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    if ($stateParams.id) {
        $scope.orderId = $stateParams.id;
    }
    $.jStorage.deleteKey("myCart");
    $.jStorage.deleteKey("gifts");
    $.jStorage.deleteKey("discountValues");
    $.jStorage.deleteKey("gst");
    $.jStorage.deleteKey("totalDiscount");
    $.jStorage.deleteKey("giftCards");
    var emailUser = {};
    emailUser._id = $.jStorage.get("userId");
    emailUser.order = $.jStorage.get("userOrders");
    OrderService.ConfirmOrderPlacedMail(emailUser, function (data) {
        console.log("in User/ConfirmOrderPlacedMail", data);
        if (data.value === true) {

        }
    });
    if (emailUser.order.giftVoucher.length > 0) {
        OrderService.giftVoucherCodeMail(emailUser, function (data) {
            console.log("in User/giftVoucherCodeMail", data);
            if (data.value === true) {

            }
        });
    }
});