sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

       
        return Controller.extend("logaligroup.Employees.controller.MainView", {
            onInit: function () {

            },

            onValidate: function () {
            var inputEmployee = this.byId("inputEmployee");
            var valueEmployee = inputEmployee.getValue();

            if (valueEmployee.length === 6) {
                inputEmployee.setDescription("Ok");
            } else {
                inputEmployee.setDescription("Not Ok");
            };


        }
        });
    });
