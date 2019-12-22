const submitButton = document.querySelector('#submit');

//Replicants
const textReplicant = nodecg.Replicant('schedule-content');

textReplicant.on('change', (newValue, oldValue) => {

  if (newValue != null) {
    let array = newValue.split('§');
    let inputs = document.getElementsByClassName( 'input' );

    for(let i in inputs ) {
      inputs[i].value = array[i];
    }
  }
});

//Button clicks
submitButton.onclick = () => {
  let inputs = document.getElementsByClassName( 'input' ),
      text  = [].map.call(inputs, function( input ) {
          return input.value;
      }).join('§');

  textReplicant.value = text;
};
