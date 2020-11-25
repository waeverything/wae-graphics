const textReplicant = nodecg.Replicant('schedule-content', 'wae-graphics');
const schedule = document.getElementById('schedule');

textReplicant.on('change', (newValue, oldValue) => {
	schedule.innerHTML = "";

	if (newValue == null) return;

	const array = newValue.split('§');

	for (let i in array) {
		const element = document.createElement("H2");
		element.innerHTML = array[i];
		schedule.appendChild(element);
	}
});


//Clock
function currentTime() {
	const date = new Date(); /* creating object of Date class */
	document.getElementById("clock").innerText = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds(); /* adding time to the div */
	setTimeout(currentTime, 1000); /* setting timer */
}

currentTime(); /* calling currentTime() function to initiate the process */