sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.ui5training.exercise1.2.controller.SimpleForm1", {
        onInit() {
        },

        clearAllFields() {
            this.getView().byId('input_name').setValue("");
            this.getView().byId('input_street').setValue("");
            this.getView().byId('input_house_no').setValue("");
            this.getView().byId('input_zip_code').setValue("");
            this.getView().byId('input_city').setValue("");
            this.getView().byId('box_country').setValue("");
        },
        //new change
        
    });
});