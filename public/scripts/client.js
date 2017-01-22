console.log("JS");

var charApp = angular.module('charApp', ["ngRoute"]);

charApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: '../views/home.html',
            controller: 'homeController'
        })
        .when("/newToon", {
            templateUrl: '../views/newToon.html',
            controller: 'newToonController'
        })
    .otherwise({
        redirectTo: "/home"
    });
}]);

charApp.factory("toon", function() {
    var toon = {
    };
    return toon;
});

charApp.controller('homeController', ["$scope", "$http", "toon",
    function($scope, $http, toon) {
              console.log("homeController standing by.");
        //         $scope.flix = [];
        //
    }
]);

charApp.controller('newToonController', ["$scope", "$http", "toon",
    function($scope, $http, toon) {
      console.log('newToon standing by.');
        //         console.log("homeController standing by.");
        //         $scope.flix = [];
        //
    }
]);
