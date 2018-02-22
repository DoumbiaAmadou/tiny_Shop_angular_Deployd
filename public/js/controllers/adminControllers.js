angular.module("journaux")
    .constant("authUrl", "http://localhost:2403/users/login")
    .constant("ordersUrl", "http://localhost:2403/orders")
    .controller("authCtrl", function ($scope, $http, $location, authUrl) {
        $scope.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                    withCredentials: true
            }).then(function (data) {
                    $location.path("/main");
                }, function (error) {
                    $scope.authenticationError = error;
                });
        }
    })
    .controller("mainCtrl", function ($scope) {
        $scope.screens = ["Products", "Orders"];
        $scope.current = $scope.screens[0];
        $scope.setScreen = function (index) {
            $scope.current = $scope.screens[index];
        };
        $scope.getScreen = function () {
            return $scope.current == "Products"
                ? "/PrivateViews/adminProducts.html" : "/PrivateViews/adminOrders.html";
        };
    })
    .controller("ordersCtrl", function ($scope, $http, ordersUrl) {
        $http.get(ordersUrl, { withCredentials: true })
            .then(function (data) {
                $scope.orders = data.data;
            }, 
            function (error) {
                $scope.error = error;
            });
        $scope.selectedOrder;
        $scope.selectOrder = function (order) {
            $scope.selectedOrder = order;
        };
        $scope.calcTotal = function (order) {
            var total = 0;
            for (var i = 0; i < order.produitArray.length; i++) {
                total +=
                    order.produitArray[i].count * order.produitArray[i].price;
            }
            return total;
        }
    });