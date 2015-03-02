var btstatus = document.getElementById('status');

function initializeSuccess() {
	console.log("BT Was init succeffuly");
	btstatus.innerHTML = "Bluetooth is enabled";
	alert("Bluetooth was enabled");
}

function initializeError() {
	console.log("error initing BT");
	btstatus.innerHTML = "Bluetooth is disabled";
}

function isBTEnabled() {
	bluetoothSerial.isEnabled(
		function () {
			alert("Bluetooth is enabled");
			return true;
		},
		function () {
			alert("Bluetooth is *not* enabled");
			return false;
		}
	);
}


function checkBluetoothStatus() {
	var btstatus = document.getElementById('status');
	btstatus.innerHTML = "Checking bluetooth information";
	if (isBTEnabled) {
		btstatus.innerHTML = "Bluetooth is enabled";
	} else {
		btstatus.innerHTML = "Bluetooth is disabled";
	}
}

function isEnabledSuccess(isEnabled) {
	//var btstatus = document.getElementById('status');
	if (isEnabled) {
		btstatus.innerHTML = "Enabled";
	} else {
		btstatus.innerHTML = "Disabled";
	}
}

function enableBluetooth() {
	if (device.platform === "Android") {
		
	}
	//var btstatus = document.getElementById('status');
	btstatus.innerHTML = "Attempting to turn bluetooth on";
};

function initBT() {
	var params = {
		"request": true,
		"statusReceiver": true
	}
	alert("test");
	bluetoothle.initialize(this.initializeSuccess, this.initializeError, params);
}

function subsc() {
	bluetoothSerial.subscribe('\n', function (data) {
		console.log(data);
		document.getElementById('data').innerHTML = "Number of returns: " + data + "\n Weight = 100KG";
	});
}