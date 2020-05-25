(function() {
    "use strict";

    var lunchCheck = angular.module("LunchCheck", []);

    LunchCheckController = lunchCheck.controller(
        "LunchCheckController",
        LunchCheckController
    );

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
        $scope.itemList = "";
        $scope.message = "";
        var numOfItems;

        $scope.checkIfTooMuch = function() {
            numOfItems = $scope.itemList.split(",").filter(function(item) {
                return item.trim() != "";
            }).length;

            if (numOfItems === 0 || !$scope.itemList.trim()) {
                $scope.message = "Please enter data first!";
            } else if (numOfItems !== 0 && numOfItems <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();