/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/acn/ui5training/exercise1/2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
