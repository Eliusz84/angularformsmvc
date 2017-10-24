
angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, $modalInstance, DataService) {

        if ($routeParams.id)
            $scope.Empleado = DataService.getEmpleado($routeParams.id);
        else
            $scope.Empleado = { id: 0 };

        $scope.editableEmpleado = angular.copy($scope.Empleado);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.submitForm = function () {

            if ($scope.editableEmpleado.id == 0) {
                // insert new Empleado
                DataService.insertEmpleado($scope.editableEmpleado);
            }
            else {
                // update the Empleado
                DataService.updateEmpleado($scope.editableEmpleado);
            }

            $scope.Empleado = angular.copy($scope.editableEmpleado);
            //$window.history.back();

            $modalInstance.close();
        };

        $scope.cancelForm = function () {
            //$window.history.back();

            $modalInstance.dismiss();
        };

    });