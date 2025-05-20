/*global QUnit*/

sap.ui.define([
	"com/acn/ui5training/exercise1/2/controller/SimpleForm1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SimpleForm1 Controller");

	QUnit.test("I should test the SimpleForm1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
