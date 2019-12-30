let bottomTimeout;
let leftTimeout;
let rightTimeout;

//Bottom panel
let bottomPanelTime = 10;
nodecg.listenFor('bottomPanelTime', (value, ack) => {
	bottomPanelTime = value;
});
nodecg.listenFor('bottomMessage', (value, ack) => {
	clearTimeout(bottomTimeout);

	let content = document.getElementById("bottomContent");
	content.innerHTML = "";

	let names = value.split(";");
	for (var i = 0; i < names.length; ++i) {
		let nameBox = document.createElement("H3");
		nameBox.innerHTML = names[i];
		content.appendChild(nameBox);
	}

	let panel = document.getElementById("bottomPanel")
	panel.classList.add("show");

	bottomTimeout = setTimeout(function() {
		panel.classList.remove("show");
	}, bottomPanelTime * 1000);
});

//Left panel
nodecg.listenFor('leftMessage', (value, ack) => {
	clearTimeout(leftTimeout);

	let text = value.split("§");
	document.getElementById("leftUpper").innerHTML = text[0];
	if (text[1] != null) {
		document.getElementById("leftLower").innerHTML = text[1];
	}

	let panel = document.getElementById("leftPanel")
	panel.classList.add("show");

	leftTimeout = setTimeout(function() {
		panel.classList.remove("show");
	}, 10000);
});

//Right panel
nodecg.listenFor('rightMessage', (value, ack) => {
	clearTimeout(rightTimeout);

	let text = value.split("§");
	document.getElementById("rightUpper").innerHTML = text[0];
	if (text[1] != null) {
		document.getElementById("rightLower").innerHTML = text[1];
	}

	let panel = document.getElementById("rightPanel")
	panel.classList.add("show");

	rightTimeout = setTimeout(function() {
		panel.classList.remove("show");
	}, 10000);
});
