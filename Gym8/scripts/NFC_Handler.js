var status = document.getElementById('data');

function initListener() {
	nfc.addNdefListener(
		function(nfcEvent) {
			var tag = nfcEvent.tag,
				ndefMessage = tag.ndefMessage;
			// assuming the first record in the message has 
			// a payload that can be converted to a string.
			var macAddress = nfc.bytesToString(ndefMessage[0].payload).substring(3);
			//10:14:06:03:04:28
			if (confirm(macAddress)) {
				var address = { "address": "10:14:06:03:04:28" };
				bluetoothSerial.connect("10:14:06:03:04:28", function () { alert("connetcted");
					subsc();
				}, function () { alert("unable to connect"); });
			}
		},
		function() { // success callback
			console.log("Waiting for NDEF tag");
			alert("enable");
		},
		function(error) { // error callback
			console.log("Error adding NDEF listener " + JSON.stringify(error));
			alert("disable");
		}
	);
}

function isNFCEnabled() {
	alert("Nfc enabled");
}

function initNFC() {
		nfc.enabled(initListener, function() { alert("NFC is unavailable"); });
	}