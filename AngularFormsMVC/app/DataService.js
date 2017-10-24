
angularFormsApp.factory('DataService',
    function () {
        var getEmpleado = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullName: "Milton Waddams",
                    notes: "The ideal Empleado.  Just don't touch his red stapler.",
                    department: "Administration",
                    dateHired: "July 11 2014",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmpleado = function (newEmpleado) {
            return true;
        };

        var updateEmpleado = function (Empleado) {
            return true;
        };

        return {
            insertEmpleado: insertEmpleado,
            updateEmpleado: updateEmpleado,
            getEmpleado: getEmpleado
        };
    });