
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newEmpleadoForm", {
            templateUrl: "app/EmpleadoForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmpleadoForm/:id", {
            templateUrl: "app/EmpleadoForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

angularFormsApp.controller("HomeController",
    function ($scope, $location, $modal, DataService) {

        $scope.showCreateEmpleadoForm = function () {
            //$location.path('/newEmpleadoForm');

            $modal.open({
                templateUrl: 'app/EmpleadoForm/efTemplate.html',
                controller: 'efController'
            });

        };

        $scope.showUpdateEmpleadoForm = function (id) {
            $location.path('/updateEmpleadoForm/' + id)
        };

    });

