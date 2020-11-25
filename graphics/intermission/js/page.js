//Background
const barCount = 20;

for (let i = 0; i < barCount; i++) {
	const elem = document.createElement("img");
	elem.setAttribute("src", "svg/3dbar.svg");
	elem.style.animationDelay = Math.floor(Math.random() * -60) + "s"
	elem.style.opacity = Math.random() * 1
	document.getElementById("objects").appendChild(elem);
}

//Typewriter effect
const typingSpeed = 150;

const textReplicant = nodecg.Replicant('intermission-text', 'wae-graphics');

let displayText = "";

textReplicant.on('change', (newValue, oldValue) => {
	displayText = newValue;
});

let i = 0;
function typeWriter() {
	if (displayText == null) return;

	if (i < displayText.length) {
		document.getElementById("typewriter").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, typingSpeed);
	}

	setTimeout(function() {
		document.getElementById("typewriter").innerHTML = "";
	}, 15000);
}

setInterval(function() {
	i = 0;
	typeWriter();
}, 20000);

onload = typeWriter();
