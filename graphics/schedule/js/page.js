const textReplicant = nodecg.Replicant('schedule-content', 'wae-graphics');
const content = document.getElementById('schedule');

textReplicant.on('change', (newValue, oldValue) => {
  content.innerHTML = "";

  if (newValue != null) {
    let array = newValue.split('§');
    console.log(array);

    for(let i in array) {
      let element = document.createElement("H2");
      element.innerHTML = array[i];
      content.appendChild(element);
    }
  }
});
