(function() {
    "use strict";
    angular
        .module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];

    function ToBuyController(ShoppingListCheckOffService) {
        var tobuy = this;
        tobuy.items = ShoppingListCheckOffService.getToBuyItems();

        tobuy.bought = function(index) {
            ShoppingListCheckOffService.buyItems(index);
        };
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

    function AlreadyBoughtController(ShoppingListCheckOffService, $scope) {
        var boughtItems = this;
        boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var tobuyItems = [
            { quantity: "19", name: "mangoes" },
            { quantity: "48", name: "papayas" },
            { quantity: "12", name: "bananas" },
            { quantity: "25", name: "pineapples" },
            { quantity: "30", name: "oranges" },
        ];
        var boughtItems = [];

        service.buyItems = function(index) {
            var boughtItem = tobuyItems.splice(index, 1);
            boughtItems.push({
                name: boughtItem[0].name,
                quantity: boughtItem[0].quantity,
            });
        };

        service.getToBuyItems = function() {
            return tobuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };
    }
})();