/*Nina Kong*/

function showPassword() {
	var target = $("#showHide");
	target.click(function() {
		if ($("#password").attr("type")=="password") {
			$("#password").attr("type", "text");
		} else {
			$("#password").attr("type", "password");
		}
	})
}

$(document).ready(function () {
	"use strict";
	showPassword();
});
