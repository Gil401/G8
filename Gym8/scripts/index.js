// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
	(function() {
		"use strict";

		document.addEventListener('deviceready', onDeviceReady.bind(this), false);

		function onDeviceReady() {
			// Handle the Cordova pause and resume events
			document.addEventListener('pause', onPause.bind(this), false);
			document.addEventListener('resume', onResume.bind(this), false);
			var btn = document.querySelector("#ChangeColorBTN");
			btn.addEventListener("click", changeColor, false);
			var enableBTbtn = document.querySelector("#enableBT");
			enableBTbtn.addEventListener("click", enableBluetooth, false);
			var checkBTbtn = document.querySelector("#checkBT");
			checkBTbtn.addEventListener("click", checkBluetoothStatus, false);

			var element = document.getElementById('deviceProperties');
			element.innerHTML = 'Device Model: ' + device.model + '<br />' +
				'Device Cordova: ' + device.cordova + '<br />' +
				'Device Platform: ' + device.platform + '<br />' +
				'Device UUID: ' + device.uuid + '<br />' +
				'Device Version: ' + device.version + '<br />';
			var btstatus = document.getElementById('status');
			btstatus.innerHTML = "Getting bluetooth information";
			initNFC();
			initBT();
		}

		function changeColor(e) {
			document.querySelector("body").style.backgroundColor = "yellow";
		}

		function onPause() {
			
		};

		function onResume() {
			
		};
	})();