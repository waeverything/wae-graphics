//Show panel for 10 seconds
function showPanel(ID) {
	let element = document.getElementById(ID);

	element.classList.add("show");

	setTimeout(function() {
		element.classList.remove("show");
	}, 10000);
}

let bottomContent = document.getElementById("bottomContent");

//Bottom panel
nodecg.listenFor('bottomMessage', (value, ack) => {

	bottomContent.innerHTML = "";

	let names = value.split(";");
	for (var i = 0; i < names.length; ++i) {
		let nameBox = document.createElement("H3");
		nameBox.innerHTML = names[i];
		bottomContent.appendChild(nameBox);
	}

	showPanel("bottomPanel");
});

//Left panel
nodecg.listenFor('leftMessage', (value, ack) => {
	let textfields = value.split("§");
	document.getElementById("leftUpper").innerHTML = textfields[0];
	if (textfields[1] != null) {
		document.getElementById("leftLower").innerHTML = textfields[1];
	}

	showPanel("leftPanel");
});

//Right panel
nodecg.listenFor('rightMessage', (value, ack) => {
	let textfields = value.split("§");
	document.getElementById("rightUpper").innerHTML = textfields[0];
	if (textfields[1] != null) {
		document.getElementById("rightLower").innerHTML = textfields[1];
	}

	showPanel("rightPanel");
});
