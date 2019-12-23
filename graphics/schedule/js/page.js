const textReplicant = nodecg.Replicant('schedule-content', 'wae-graphics');
const content = document.getElementById('schedule');

textReplicant.on('change', (newValue, oldValue) => {
  content.innerHTML = "";

  if (newValue != null) {
    let array = newValue.split('§');

    for(let i in array) {
      let element = document.createElement("H2");
      element.innerHTML = array[i];
      content.appendChild(element);
    }
  }
});


//Clock
function currentTime() {
	var date = new Date(); /* creating object of Date class */
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
	var t = setTimeout(function() {
		currentTime()
	}, 1000); /* setting timer */
}

function updateTime(k) {
	if (k < 10) {
		return "0" + k;
	} else {
		return k;
	}
}

currentTime(); /* calling currentTime() function to initiate the process */
